import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Item, Cart} from './components/index.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
    {path:"/", element: <App/>},
    {path:"/item/:imageId", element: <Item/>},
    {path:"/cart", element:<Cart/>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
