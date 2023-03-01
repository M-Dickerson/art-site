import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Commissions from "./components/Commissions";
import ResponsiveAppBar from "./components/Navbar";

function App() {
    return (
        <div>
            <ResponsiveAppBar />
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Commissions" element={<Commissions />} />
            </Routes>
        </div>
        );
}

export default App;