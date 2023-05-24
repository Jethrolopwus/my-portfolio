import { createBrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";



export const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },

            {
                path:'about',
                element:<About/>
            },

            {
                path:'contact',
                element:<Contact/>
            }

        ]
    }

])