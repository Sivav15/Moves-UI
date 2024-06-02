import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="flex">
            <div className="w-44 ">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayout;
