import {  useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import"/node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Layout from './components/Layout/Layout'
import { createBrowserRouter, Outlet, RouterProvider, Routes } from "react-router"
import Cart from './components/Cart/Cart'
import WishList from './components/WishList/WishList'
import NotFound from './components/NotFound/NotFound'
import Products from './components/Product/Products'
import Catrgories from './components/Categories/catrgories'
import Brands from './components/Brands/Brands'
import Login from './components/Login/LogIn'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
// import  { CounterContext } from './components/Context/CounterContext'
import CounterContextProvider from './components/Context/CounterContext'
import UserCounterContextProvider from './components/Context/UserContext'
import ProtectRoutes from './components/ProtectRoutes/TempleteName'
import ProductDeatails from './components/ProductDeatails/ProductDeatails'
import CartContextProvider from './components/Context/CartContext'
import Payment from './components/Payment/Payment'
import Allorders from './components/Allorders/Allorders'
import { Offline, Online } from "react-detect-offline";
import {QueryClient ,QueryClientProvider,useQuery,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import BrandsInfo from './components/BrandsInfo/BrandsInfo'
import WishlistCountercontextProvider from './components/Context/Wishlist'
import SubCategoriesContextProvider from './components/Context/SubCategoriesContext'
import LikeButton from './components/LikeButton/LikeButton'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import { AuthenticationContextProvider } from './components/Context/Authontication'
import ResetPassword from './components/ResetPassword/ResetPassword'
import VerifyResetCode from './components/VerifyResetCode/VerifyResetCode'


const queryClient = new QueryClient()
let routes =  createBrowserRouter([
  { path: '', element:<Layout/> , children: [
    
    { index : true, element:<ProtectRoutes><Home/></ProtectRoutes>},
    { path: 'cart', element:<ProtectRoutes><Cart/></ProtectRoutes>},
    { path: 'wishList', element:<ProtectRoutes><WishList/></ProtectRoutes>},
    { path: 'products', element:<ProtectRoutes><Products/></ProtectRoutes>},
    { path: 'catogires', element:<ProtectRoutes><Catrgories/></ProtectRoutes>},
    { path: '/productDeatails/:id/:category', element:<ProtectRoutes><ProductDeatails/></ProtectRoutes>},
    { path: 'brands', element:<ProtectRoutes><Brands/></ProtectRoutes>},
    { path: 'login', element:<Login/>},
    { path: 'logout', element:<Logout/>},
    { path: 'register', element:<Register/>},
    { path: 'payment', element:<ProtectRoutes><Payment/></ProtectRoutes>},
    { path: 'allorders', element:<ProtectRoutes><Allorders/></ProtectRoutes>},
    { path: 'BrandsInfo', element:<ProtectRoutes><BrandsInfo/></ProtectRoutes>},
    { path: 'forgetPassword', element:<ForgetPassword /> },
    { path: 'resetPassword', element:<ResetPassword /> },
    { path: 'VerifyResetCode', element:<VerifyResetCode /> },
    { path: '*', element: <NotFound></NotFound>},
  
    
]},
])
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <AuthenticationContextProvider>
    <SubCategoriesContextProvider>
    <WishlistCountercontextProvider>
    <CartContextProvider>
<UserCounterContextProvider>
    
  
    <RouterProvider router={routes}></RouterProvider>
    <ReactQueryDevtools/>
    <Offline>
    <div className="fixed top-0 bg-white h-screen w-screen overflow-hidden lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
  <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
    <div className="relative">
      <div className="absolute">
        <div className>
          <h1 className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the
            doorway to the great nothing
          </h1>
          <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
      </div>
    </div>
  </div>
  <div>
    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
  </div>
</div>
</Offline>
    
</UserCounterContextProvider>
    
</CartContextProvider>
    </WishlistCountercontextProvider>
      </SubCategoriesContextProvider>  
    
      </AuthenticationContextProvider>

   
   

    </QueryClientProvider>



    
    </>
  )
}

export default App
