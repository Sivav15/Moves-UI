import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const values = [
        {
            name: 'MY MOVIES',
            path: '/my-movies',
            img: 'https://img.icons8.com/ios-filled/50/000000/truck.png'
        },
        {
            name: 'MY PROFILE',
            path: '/my-profile',
            img: 'https://img.icons8.com/ios-filled/50/000000/user.png'
        },
        {
            name: 'GET QUOTE',
            path: '/get-quote',
            img: 'https://img.icons8.com/ios-filled/50/000000/calculator.png'
        },
        {
            name: 'LOGOUT',
            path: '/logout',
            img: 'https://img.icons8.com/ios-filled/50/000000/logout-rounded-left.png'
        }
    ]

    return (


        <nav className="w-48 h-screen bg-white p-4">
            {
                values.map((item, index) => {
                    return <NavLink
                        to={item.path}
                        className={({ isActive, isPending }) =>
                            `${isPending ? "pending" : isActive ? "border-l-4 border-red-500" : "border-l-4 border-transparent"} flex items-center p-2 mb-4 text-black font-bold `
                        }
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-6 h-6 mr-2"
                        />
                        {item.name}
                    </NavLink>
                })
            }


        </nav>


    )
}

export default Sidebar