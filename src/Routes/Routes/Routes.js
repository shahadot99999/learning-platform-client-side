import { createBrowserRouter } from "react-router-dom";
import CoursePages from "../../layouts/Coursepages";
import Category from "../../Page/Category/Category";
import Educations from "../../Page/Educations/Educations";
import Home from "../../Page/Home/Home/Home";




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
                element: <Educations></Educations>,
                loader: ({ params }) => fetch(`http://localhost:5000/educations/${params.id}`)
            }

        ]
    }
])