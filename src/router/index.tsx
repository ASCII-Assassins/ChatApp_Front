import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import DefaultLayout from "../Pages/Layouts/DefaultLayout";

const router = createBrowserRouter([
{
    path: '/',
    element: <DefaultLayout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        }
    ]
}
]);
export default router