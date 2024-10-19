import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import { toast } from 'react-toastify';
import SummaryApi from '../common/SummaryApi';
import { setUserDetails } from '../store/userSlice';

const AdminPanel = () => {
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleProfilePicClick = () => {
        // Trigger file input on click
        document.getElementById("profilePicInput").click();
    };

    const handleProfilePicChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("profilePic", file);

            try {
                const response = await fetch(SummaryApi.updateUserProfile.url, {
                    method: 'PUT',
                    body: formData,
                    credentials: 'include',
                });
                const data = await response.json();
                if (data.success) {
                    dispatch(setUserDetails(data.user));
                    toast.success('Profile picture updated successfully!');
                } else {
                    toast.error('Failed to update profile picture');
                }
            } catch (error) {
                toast.error('Failed to upload profile picture');
            }
        }
    };

    return (
        <div className='min-h-[calc(100vh-120px)] md:flex'>
            <aside className='bg-white min-h-full w-full max-w-60 customShadow admin-sidebar'>
                <div className='h-32 flex justify-center items-center flex-col'>
                    <input
                        type="file"
                        id="profilePicInput"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleProfilePicChange}
                    />
                    <div
                        className='cursor-pointer relative flex justify-center'
                        onClick={handleProfilePicClick}
                        style={{ width: '120px', height: '120px', overflow: 'hidden', borderRadius: '50%' }}
                    >
                        {user?.profilePic ? (
                            <img src={`http://localhost:8080/${user?.profilePic}`} className='w-full h-full object-cover' alt={user?.name} />
                        ) : (
                            <FaRegCircleUser className='w-full h-full text-5xl' />
                        )}
                    </div>
                    <p className='capitalize text-lg font-semibold mt-2'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div>

                {/* Navigation */}
                <div>
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All Products</Link>
                    </nav>
                </div>
            </aside>

            <main className='w-full h-full p-2 bg-gray-100'>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminPanel;