import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export let WishlistCounterContext = createContext();
export default function WishlistCountercontextProvider(props){
    const[totalPrice , settotalPrice] = useState(0)
    const[allProducts , setallProducts] = useState(null)
    useEffect(()=>{
        getWishlist();  
    },[])


    function addToWishlist(id){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId:id
        },{
            headers:{
                token:localStorage.getItem("userToken")
            }
        })
        .then((resp)=>{
            getWishlist()
            setallProducts(resp?.data?.data)
            return resp;
        })
        .catch((error)=>{console.log(error)})
    
    
    }
    function getWishlist(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
            headers:{
                token:localStorage.getItem("userToken")
            }
        }).then((resp)=>{
            setallProducts(resp?.data.data)
            return resp;
        })
        .catch((error)=>{console.log(error)})
        

    }
    function deleteWishlist(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        {
            headers:{
                token:localStorage.getItem("userToken")
            }
        }).then((resp)=>{
            getWishlist();  
            // settotalPrice(resp?.data.data.price);
            setallProducts(resp?.data.data)
            return resp;
        })
        .catch((error)=>{console.log(error)})

    }

    return <WishlistCounterContext.Provider value={{addToWishlist,getWishlist ,totalPrice , settotalPrice , allProducts , deleteWishlist}}>
        {props.children}
    </WishlistCounterContext.Provider>  
}