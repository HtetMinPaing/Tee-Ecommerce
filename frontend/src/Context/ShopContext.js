import React, { createContext } from 'react'
import all_product from "./all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = ({children}) => {

    const context = {all_product};

  return (
    <ShopContext.Provider value={context}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider