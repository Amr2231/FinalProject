import { createContext, useContext, useEffect, useState } from "react";

export let UserCounterContext = createContext(0);

export default function UserCounterContextProvider(props){
    const [User, setUser] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem("userToken")){
            setUser(localStorage.getItem("userToken"))
        }
    },[])

      return <UserCounterContext.Provider value={{User , setUser}}>
        {props.children}
      </UserCounterContext.Provider>
    
}