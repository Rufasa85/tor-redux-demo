import React, { createContext, useReducer } from 'react'

export const CountContext = createContext();
import countReducer  from './countReducer';

const CountProvider = (props)=>{
   const [state,dispatch] = useReducer(countReducer,{
    count:0
   })
    return(
        <CountContext.Provider value={[state,dispatch]}>
            {props.children}
        </CountContext.Provider>
    )
}
export default CountProvider;