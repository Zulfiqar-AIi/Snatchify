import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './ui/Layout.jsx';
import { Outlet, createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Product from './pages/Product.jsx'; // or wherever it is
import Category from './pages/Category.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import Favourite from './pages/Favourite.jsx';
import Orders from './pages/Orders.jsx';
import Success from './pages/Success.jsx';
import NotFound from './pages/NotFound.jsx';
import Cancel from './pages/Cancel.jsx';

// Layout wrapper with Outlet
const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// Render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
