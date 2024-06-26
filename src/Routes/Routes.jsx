import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import ContactUs from "../pages/ContactUs/ContactUs";
import Testimonials from "../pages/Testimonials/Testimonials";
import ServiceBanner from "../pages/Services/ServiceBanner";
import ScheduleForm from "../pages/Services/ScheduleForm";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/services',
            element: <ServiceBanner></ServiceBanner>
        },
        {
            path: '/testimonials',
            element: <Testimonials></Testimonials>
        },
        {
            path: '/schedule-form',
            element:<ScheduleForm></ScheduleForm>
        }
      ]
    },
    
  ]);
  