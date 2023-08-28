import React from "react"
import { Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import "./comp.css"
import OpeningPage from "./Pages/Home"
import Cart from "./Pages/Cart"
import Login,
{ loader as loginLoader, action as loginAction } from "./Pages/Login"
import About from "./Pages/About"
import Products,
     { loader as productsLoader } from "./Pages/Products"
import ProductsDetail,
{ loader as productsDetailLoader } from "./Pages/ProductsDetail"
import Checkout from "./Pages/Checkout"
import Layout from "./Components/Layout"
import Error from "./Pages/Error"
import { requireAuth } from "./utils"
import Success from "./Success"
import NotFound from "./Components/NotFound"



    const router = createBrowserRouter(createRoutesFromElements(
      <Route element={<Layout />} >
        <Route path="/" element={<OpeningPage />} />   
        <Route path="about" element={<About />} />
        <Route path="login" 
       element={<Login />}
       loader={loginLoader}
       action={loginAction}
       />
      
        <Route path="cart" element={<Cart />} /> 
        <Route 
         path="cart/checkout"
         element={<Checkout />}
         loader={async ({ request }) => await requireAuth(request)}
         />
        <Route path="success" element={<Success />}></Route>

        <Route path="products" element={<Products />}
         errorElement={<Error />}
         loader={productsLoader} /> 
        <Route path="products/:id" element={<ProductsDetail />} 
         errorElement={<Error />}
         loader={productsDetailLoader} />  
       <Route path="*" element={<NotFound />} />
      </Route>
          ))

function App() {
     return (
      <RouterProvider router={router}/>
      )
  }

  export default App