import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './components/PostUser.jsx';
import DisplayUser from './components/DisplayUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>
  },
  {
    path:"/users",
    element:<DisplayUser></DisplayUser>,
    loader: () => fetch('http://localhost:5000/users'),
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
