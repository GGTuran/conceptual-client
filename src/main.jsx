/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import './App.css';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './components/PostUser.jsx';
import DisplayUser from './components/DisplayUser.jsx';
import UpdatedUser from './components/UpdatedUser.jsx';
import Users2 from './components/Users2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>
  },
  {
    path:"/users",
    element:<DisplayUser></DisplayUser>,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path:"/users/:id",
    element:<UpdatedUser></UpdatedUser>,
    loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  },
  {
    path:"/users2",
    element:<Users2></Users2>
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  

  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
 </QueryClientProvider>
  
  </React.StrictMode>

 ,
)
