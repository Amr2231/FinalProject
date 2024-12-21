import  { createContext, useState }from "react";


export let Countercontext = createContext(0)


export default function CountercontextProvider(props){
    const[Count , setCount] =  useState(12);
    const[UserName , setUserName] =  useState("ali");
    return <Countercontext.Provider value={{Count , UserName, setCount , setUserName}}>
        {props.children}
    </Countercontext.Provider>  
}