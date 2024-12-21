import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let CartContext = createContext()

export default function CartContextProvider(props){
    const[totalPrice , settotalPrice] = useState(0)
    const[cartId , setcartId] = useState(0)
    const[numOfItems , setnumOfItems] = useState(0)
    const[allProducts , setallProducts] = useState(null)


    let headers = {
        token:localStorage.getItem("userToken")
    }
    function addToCart(id){
       return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
            productId:id
        } , {
            headers:{
                token:localStorage.getItem("userToken")
            }
        })
        .then((resp)=>{
            getCardItems()
            settotalPrice(resp.data.data.totalCartPrice);
            setnumOfItems(resp.data.numOfCartItems);
            setallProducts(resp.data.data.products);
            setcartId(resp.data.cartId);
            return resp;
           
    })
        .catch((error)=>{console.log(error)
            return error;
    
    })
    }
    function getCardItems(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:headers
        })
        .then((resp)=>{console.log(resp);
            settotalPrice(resp.data.data.totalCartPrice);
            setnumOfItems(resp.data.numOfCartItems);
            setallProducts(resp.data.data.products);
            setcartId(resp.data.cartId);
            return resp;
        })
        .catch((error)=>{console.log(error)})
    }
    function UptadeCartItem(id,count){
        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            count : count
        },{
            headers:headers
        })
        .then((resp)=>{console.log(resp);
            settotalPrice(resp.data.data.totalCartPrice);
            setnumOfItems(resp.data.numOfCartItems);
            setallProducts(resp.data.data.products);
            setcartId(resp.data.cartId);
            return resp;
        })
        .catch((error)=>{console.log(error)})
    }
    function DeleteItem(id){
        axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            headers:headers
        })
        .then((resp)=>{console.log(resp);
            settotalPrice(resp.data.data.totalCartPrice);
            setnumOfItems(resp.data.numOfCartItems);
            setallProducts(resp.data.data.products);
            setcartId(resp.data.cartId);
            return resp;
        })
        .catch((error)=>{console.log(error)})
    }
    useEffect(()=>{
        getCardItems();  
    },[])
    return <CartContext.Provider value={{addToCart,settotalPrice , getCardItems , allProducts ,setallProducts, totalPrice,setnumOfItems ,numOfItems,UptadeCartItem,DeleteItem,cartId}}>
        {props.children}
    </CartContext.Provider>



    }
