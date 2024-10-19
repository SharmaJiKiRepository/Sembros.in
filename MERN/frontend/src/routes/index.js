import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import UserProfile from '../pages/UserProfile';
import UpdateProfile from '../pages/UpdateProfile';
import Checkout from '../pages/Checkout';
import SellerDashboard from '../pages/SellerDashboard';  // Import the SellerDashboard

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'product-category', element: <CategoryProduct /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'search', element: <SearchProduct /> },
      { path: 'users/profile', element: <UserProfile /> },
      { path: 'update-profile', element: <UpdateProfile /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'seller-dashboard', element: <SellerDashboard />, /* Secure this route as needed */ },
      {
        path: 'admin-panel',
        element: <AdminPanel />,
        children: [
          { path: 'all-users', element: <AllUsers /> },
          { path: 'all-products', element: <AllProducts /> },
        ],
      },
    ],
  },
]);

export default router;
