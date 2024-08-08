import React,{createContext} from "react";

// initialize context
export const StartContext = createContext()

export default function ModaContext({children}){

    const [count,setCount] = React.useState(0)
    const [moda,setmoda] = React.useState(false)


    const changeModa = () =>{
        setmoda((prev)=>!prev)
    }
    

    return(
        <StartContext.Provider value={{count,moda,changeModa}} >
             {children}
        </StartContext.Provider>
    )
}


