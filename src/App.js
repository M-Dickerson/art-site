import React, { useState } from "react";
import { Route, Routes } from "react-router";
// Page imports
import Home from "./components/pages/Home";
import Archive from "./components/pages/Archive";
import About from "./components/pages/About";
import Commissions from "./components/pages/Commissions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    const [currentPage, setPage] = useState("Home");
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Commissions" element={<Commissions />} />
                <Route path="Archive" element={<Archive />} />
                <Route path="About" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};