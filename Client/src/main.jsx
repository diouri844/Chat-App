import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { createBrowserRouter,
        RouterProvider
       } from 'react-router-dom';


// define my router : 

const Router = createBrowserRouter(
  [
    { 
      path:'/', 
      element: <App />
    },
    {
      path:"/Sing-in", 
      element:<Login />
    },
    {
      path:"/Sing-up", 
      element:<Register />
    }
  ]
);


ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <React.StrictMode>
      <RouterProvider router={Router}>
        <App />
      </RouterProvider>
    </React.StrictMode>,
);
