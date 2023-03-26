import React from 'react';
import './App.css';
import Layout from './layout.jsx';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import MasterHead from './MasterHead.jsx';
import Footer from './Footer.jsx';
import Portfoilo from './Portfoilo.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';


export default function App() {

  let routes = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/portfolio', element: <Portfoilo /> },
        { path: '', element: <MasterHead /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },

      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />

    </>
  )
}
