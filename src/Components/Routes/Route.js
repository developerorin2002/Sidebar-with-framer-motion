import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Home/Home'
import About from "../About/About";
import Login from "../Login/Login";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;