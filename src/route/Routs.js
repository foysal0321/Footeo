import { createBrowserRouter } from "react-router-dom";
import Main from "../lyout/Main";
import Home from '../components/home/Home'
import Services from '../components/services/Services'
import Details from "../components/services/Details";
import Allservices from "../components/services/Allservices";
import Blog from "../components/blog/Blog";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Review from "../components/review/Review";
import Addservice from "../components/addService/Addservice";
import Privetrout from "./Privetrout";
import ReviewCard from "../components/review/ReviewCard";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <h3 className="text-center text-3xl py-5">Page no found 404</h3>,
        element: <Main />,
        children: [
            {
                path: '/',              
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/review',
                element:<Privetrout> <Review /> </Privetrout> 
            },
            {
                path: '/addservice',
                element: <Privetrout> <Addservice /></Privetrout> 
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/allservices',
                element: <Allservices />,               
            },        
            {
                path: '/services/:id',
                element: <Details />  ,
                loader:({params}) => fetch(`https://service-server-psi.vercel.app/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <ReviewCard />  ,
                loader:({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            },

        ]
    }
])