import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Components/Login';
import SignupPage from './Components/signup';
import Settings from "./Components/Settings"
import Search from './Components/Search';
import ChangePassword from './Components/Settings/ChangePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/settings",
    element:<Settings/>
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/changePassword",
    element: <ChangePassword />
  },
 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render
root.render(<RouterProvider router={router} />);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();