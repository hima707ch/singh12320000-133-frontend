import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import ProductListingPage from "./ProductListingPage/Body.jsx";
import ProductDetailPage from "./ProductDetailPage/Body.jsx";
import CartPage from "./CartPage/Body.jsx";
import CheckoutPage from "./CheckoutPage/Body.jsx";
import OrderConfirmationPage from "./OrderConfirmationPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";
import UserProfilePage from "./UserProfilePage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/productlistingpage" element={<ProductListingPage />} />
        <Route path="/productdetailpage" element={<ProductDetailPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/orderconfirmationpage" element={<OrderConfirmationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/userprofilepage" element={<UserProfilePage />} />
            </Routes>
        </Router>
    );
};

export default Body;