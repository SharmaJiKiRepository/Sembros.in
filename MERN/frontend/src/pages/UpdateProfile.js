import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common/SummaryApi';
import { setUserDetails } from '../store/userSlice';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name);
  const [email] = useState(user?.email);
  const [role, setRole] = useState(user?.role);
  const [address, setAddress] = useState(user?.address || '');
  const [profilePic, setProfilePic] = useState(null);
  const [gstNumber, setGstNumber] = useState(user?.gstNumber || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [companyName, setCompanyName] = useState(user?.companyName || '');

  useEffect(() => {
    if (!user) navigate('/login'); // Redirect if not logged in
  }, [user, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('role', role);
    formData.append('address', address);
    if (profilePic) {
      formData.append('profilePic', profilePic);
    }
    if (role === 'seller') {
      formData.append('gstNumber', gstNumber);
      formData.append('phone', phone);
      formData.append('companyName', companyName);
    }

    try {
      const response = await fetch(SummaryApi.updateUserProfile.url, {
        method: 'PUT',
        body: formData,
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        dispatch(setUserDetails(data.user));
        toast.success('Profile Updated Successfully');
        
        // Redirect based on user role
        if (data.user.role === 'seller') {
          navigate('/seller-dashboard');  // Redirect seller to the seller dashboard
        } else {
          navigate('/users/profile');     // Redirect general user to profile page
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to update profile: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              disabled
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="general">General</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          {role === 'seller' && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">GST Number:</label>
                <input
                  type="text"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Phone Number:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Company Name:</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Profile Picture:</label>
            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
