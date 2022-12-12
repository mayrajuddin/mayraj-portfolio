import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from '../Pages/Home/Home'

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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/project/:id',
                element: <ProjectDetails />,
                loader: ({ params }) => fetch(`projectsData.json/${params.id}`)
            }
        ]
    }
])