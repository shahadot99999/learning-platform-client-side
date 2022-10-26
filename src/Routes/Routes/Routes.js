import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
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
                loader: () => fetch('http://localhost:5000/educations')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/educations/:id',
                element: <PrivateRoute><Educations></Educations></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/educations/${params.id}`)
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
            }


        ]
    }
])