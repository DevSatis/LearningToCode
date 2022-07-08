import React, { createContext, useState } from 'react'

export const ContextCart = createContext();

const Context = ({children}) => {

  const [cart, setCart] =useState();
  return (
    <ContextCart.Provider value={{cart,setCart}}>
        {children}
    </ContextCart.Provider>
  )
}

export default Context