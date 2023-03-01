import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Archive from "./components/pages/Archive";
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
                <Route path="Archive" element={<Archive />} />
            </Routes>
            <SimpleBottomNavigation />
        </div>
        );
}

export default App;