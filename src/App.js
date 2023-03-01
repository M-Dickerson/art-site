import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Commissions from "./components/pages/Commissions";
import ResponsiveAppBar from "./components/Navbar";
import SimpleBottomNavigation from "./components/Footer";

function App() {
    return (
        <div>
            <ResponsiveAppBar />
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Commissions" element={<Commissions />} />
            </Routes>
            <SimpleBottomNavigation />
        </div>
        );
}

export default App;