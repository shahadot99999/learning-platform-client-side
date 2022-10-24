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
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/educations/:id',
                element: <Educations></Educations>
            }

        ]
    }
])