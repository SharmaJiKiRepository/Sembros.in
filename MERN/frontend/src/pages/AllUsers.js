import React, { useEffect, useState } from 'react';
import SummaryApi from '../common/SummaryApi';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import { FaBan, FaCheckCircle } from "react-icons/fa"; // Import icons for block and unblock
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {
    const [allUser, setAllUsers] = useState([]);
    const [openUpdateRole, setOpenUpdateRole] = useState(false);
    const [updateUserDetails, setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id: ""
    });

    const fetchAllUsers = async () => {
        const fetchData = await fetch(SummaryApi.allUser.url, {
            method: SummaryApi.allUser.method,
            credentials: 'include'
        });

        const dataResponse = await fetchData.json();

        if (dataResponse.success) {
            setAllUsers(dataResponse.data);
        }

        if (dataResponse.error) {
            toast.error(dataResponse.message);
        }
    };

    // Handle blocking and unblocking users
    const handleBlockUnblock = async (userId, isBlocked) => {
        const action = isBlocked ? 'unblock' : 'block'; // Determine action
        const confirmAction = window.confirm(`Are you sure you want to ${action} this user?`);

        if (confirmAction) {
            try {
                const response = await fetch(SummaryApi.blockUnblockUser.url, { // API for blocking/unblocking
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({ userId, isBlocked: !isBlocked }) // Toggle block status
                });

                const result = await response.json();
                if (result.success) {
                    fetchAllUsers(); // Refresh user list
                    alert(`User ${action}ed successfully`);
                } else {
                    alert(`Failed to ${action} user`);
                }
            } catch (error) {
                console.error(`Error ${action}ing user:`, error);
                alert(`An error occurred while ${action}ing the user.`);
            }
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className='bg-white pb-4'>
            <table className='w-full userTable text-center'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Role</th>
                        <th>Company Name</th>
                        <th>GST No.</th>
                        <th>Address</th>
                        <th>Type of Products</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.map((el, index) => (
                        <tr key={el._id}>
                            <td>{index + 1}</td>
                            <td>{el?.name}</td>
                            <td>{el?.email}</td>
                            <td>{el?.phone || 'N/A'}</td>

                            <td>{el?.role}</td>
                            <td>{el?.role === 'seller' ? el?.companyName || 'N/A' : 'N/A'}</td>
                            <td>{el?.role === 'seller' ? el?.gstNumber || 'N/A' : 'N/A'}</td>
                            <td>{el?.role === 'seller' ? el?.address || 'N/A' : 'N/A'}</td>
                            <td>{el?.role === 'seller' ? el?.typeOfProducts || 'N/A' : 'N/A'}</td>
                            <td>{moment(el?.createdAt).format('LL')}</td>
                            <td>
                                <button
                                    className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'
                                    onClick={() => {
                                        setUpdateUserDetails(el);
                                        setOpenUpdateRole(true);
                                    }}
                                >
                                    <MdModeEdit />
                                </button>
                                <button
                                    className='bg-red-100 p-2 rounded-full cursor-pointer hover:bg-red-500 hover:text-white'
                                    onClick={() => handleBlockUnblock(el._id, el.isBlocked)} // Use isBlocked property
                                >
                                    {el.isBlocked ? <FaCheckCircle /> : <FaBan />}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {openUpdateRole && (
                <ChangeUserRole
                    onClose={() => setOpenUpdateRole(false)}
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )}
        </div>
    );
};

export default AllUsers;