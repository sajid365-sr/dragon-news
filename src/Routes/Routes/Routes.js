import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                loader:() => fetch('http://localhost:5000/news'),
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path:'/news/:id',
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element:<News></News>
            }
        ]
    }
])