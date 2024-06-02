import React from 'react'
import { FaTruck, FaUser, FaCalculator, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const values = [
        {
            name: 'MY MOVES',
            path: '/my-moves',
            icon: <FaTruck color='#EC5642' size={17} className='mr-1' />,
        },
        {
            name: 'MY PROFILE',
            path: '/my-profile',
            icon: <FaUser color='#EC5642' size={17} className='mr-1' />,
        },
        {
            name: 'GET QUOTE',
            path: '/get-quote',
            icon: <FaCalculator color='#EC5642' size={17} className='mr-1' />,
        },
        {
            name: 'LOGOUT',
            path: '/logout',
            icon: <FaSignOutAlt color='#EC5642' size={17} className='mr-1' />,
        }
    ];

    return (
        <nav className='fixed top-0 left-0'>
            <div className="w-full h-screen bg-white p-4 ">
                {values.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive, isPending }) =>
                            `${isPending ? "pending" : isActive ? "border-l-4 border-red-500" : "border-l-4 border-transparent"} flex items-center p-2 mb-4 text-black font-bold `
                        }
                    >
                        {item.icon} {/* Use the imported icon component */}
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
