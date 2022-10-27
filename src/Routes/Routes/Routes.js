import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Fag from "../../Fag/Fag";
import CoursePages from "../../layouts/Coursepages";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Category from "../../Page/Category/Category";
import Educations from "../../Page/Educations/Educations";
import Home from "../../Page/Home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <CoursePages></CoursePages>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b610-lerning-platform-server-side-shahadot99999.vercel.app/educations')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-shahadot99999.vercel.app/category/${params.id}`)
            },
            {
                path: '/educations/:id',
                element: <PrivateRoute><Educations></Educations></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-shahadot99999.vercel.app/educations/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/fag',
                element: <Fag></Fag>
            }



        ]
    },
    {
        path: '*',
        element: <div>404 Not found.</div>
    }
])