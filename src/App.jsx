
import Home from './pages/Home'
import Product from './pages/Product'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Layout from './pages/Layout'
import Signup from "./pages/Signup.jsx"
import Signin from "./pages/Signin.jsx"
import Oneproduct from './pages/Oneproduct.jsx'
import { Provider } from "react-redux"
import store from "./store/store.js"
import Sala from './pages/Sala.jsx'


 const router=createBrowserRouter([
  {
    path:"/",
    element:
   <Layout/>,
   children:
   [
    {
      index:true,
      element:<Home/>,
    },{
      path:"Product",
      element:<Product/>
    },
     {
    path: "signup",
    element: <Signup />
  },
   {
    path: "signin",
    element: <Signin />
  },{
  path: "product/:id",
  element: <Oneproduct />
},
{
  path: "Sala",
  element: <Sala />
}

   ]
  },

  
  {
    path:"*",
    element:
   <Notfound/>
    
  }

 ])
function App() {


  return (
    
    
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

       
  )
}

export default App
