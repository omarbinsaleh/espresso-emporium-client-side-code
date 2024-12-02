import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import AddCoffe from "../Pages/AddCoffe";
import MainLayout from "../layout/MainLayout";


const routes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/coffees')
         },
         {
            path: '/add-coffee',
            element: <AddCoffe></AddCoffe>
         }
      ]
   }
])

export default routes;