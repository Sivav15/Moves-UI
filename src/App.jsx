import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Movies from './pages/Movies';
import Profile from './pages/Profile';
import GetQuote from './pages/GetQuote';
import Logout from './pages/Logout';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Movies />,
        },
        {
          path: "my-movies",
          element: <Movies />,
        },
        {
          path: "my-profile",
          element: <Profile />,
        },
        {
          path: "get-quote",
          element: <GetQuote />,
        },
        {
          path: "logout",
          element: <Logout />,
        },

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App