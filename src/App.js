// import React from 'react';
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductPage,
  BestSellingPage,
  EvantPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopeCreatePage,
  ShopeLoginPage,
  ShopeDashbordPage,
  ShopeCreateProduct,
  ShopAllProducts,
  ShopCreateEvent,
  ShopeAllOrdres,
  DiscountPage,
  ShopeAllRefunds,
  ShopWithdrawMoney,
  ShopInbox,
} from "./routes/Routes";

import {
  AdminDashbordPage,
  AdminDashbordUser,
  AdminWithdrawRequestPage,
} from "./routes/AdminRoutes";

// import axios from "axios";
// import {server} from "./server"
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import AdminProtectedRoute from "./protectedRoutes/AdminProtectedRoute";
// import { ShopeCreateProduct } from "./components/ShopPages/ShopeCreateProduct.jsx";
// import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import { useSelector } from "react-redux";
import OrderSuccessPage from "./pages/OrderSuccessPage";
// import ProductDetailsCart from "./components/Route/ProductDetailsCart/ProductDetailsCart";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Rou
          te path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EvantPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/order/success/:id" element={<OrderSuccessPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/seller" element={<ShopeCreatePage />} />
          <Route path="/shope-login" element={<ShopeLoginPage />} />
          <Route path="/dashbord" element={<ShopeDashbordPage />} />
          <Route
            path="/dashbord-create-product"
            element={<ShopeCreateProduct />}
          />
          <Route path="/dashbord-products" element={<ShopAllProducts />} />
          <Route path="/dashbord-create-event" element={<ShopCreateEvent />} />
          <Route path="/dashbord/cupouns" element={<DiscountPage />} />
          <Route path="/dashbord-orders" element={<ShopeAllOrdres />} />
          <Route path="/dashbord-refund" element={<ShopeAllRefunds />} />
          <Route
            path="/dashbord-withdraw-money"
            element={<ShopWithdrawMoney />}
          />
          <Route path="/dashbord-inbox" element={<ShopInbox />} />

          {/* admin routes */}

          <Route path="/admin-dashbord" element={<AdminDashbordPage />} />
          <Route path="/admin-user" element={<AdminDashbordUser />} />
          <Route
            path="/dashbord-withdraw-request"
            element={<AdminWithdrawRequestPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
