import { createContext, useState, useContext } from "react"

export const StockContext = createContext()
export const StockContextProvider = StockContext.Provider
export const useStockContext = () => useContext(StockContext)

export const StockProvider = ({ children }) => {

    const [stocks, setStocks] = useState([])

    const addNewStock = (stock) => setStocks(
        (prevState) => [...prevState, stock]
    )

    return (
        <StockContextProvider 
            value={{stocks, addNewStock}}
        >
            {children}
        </StockContextProvider>
    )
}