import { createBrowserRouter } from "react-router-dom";
import Main from "../lyout/Main";
import Home from '../components/home/Home'
import Services from '../components/services/Services'
import Details from "../components/services/Details";

export const router = createBrowserRouter([
    {
        path: '/',
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
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <Details />,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    }
])