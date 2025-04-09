import { useStockContext } from "./contexts/StockContext"
import { useCallback, useEffect, useState } from "react"

const API_KEY = "1NVRDOZBL05519EX"

const StockDisplayComponent = () => {
  const { stocks } = useStockContext()
  const [prices, setPrices] = useState({})

  const getStockPrice = useCallback(async (ticker) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`
      )
      const data = await response.json()
      const price = data["Global Quote"]?.["05. price"]
      return price
    } catch (error) {
      console.error(`Error fetching price for ${ticker}:`, error)
      return "N/A"
    }
  }, [])

  useEffect(() => {
    const fetchPrices = async () => {
      const newPrices = {}
      for (const item of stocks || []) {
        const price = await getStockPrice(item.ticker)
        newPrices[item.ticker] = price
      }
      setPrices(newPrices)
    }

    if (stocks?.length) {
      fetchPrices()
    }
  }, [stocks, getStockPrice])

  return (
    <>
      {stocks?.map((item, index) => (
        <div key={index}>
          <b>Symbol: {item.ticker}</b>
          <p>Quantity: {item.quantity}</p>
          <p>Purchase price: {item.price}</p>
          <p>Current price: {prices[item.ticker] || "Loading..."}</p>
        </div>
      ))}
    </>
  )
}

export default StockDisplayComponent



// import { useStockContext } from "./contexts/StockContext"
// import { useCallback } from "react"

// const StockDisplayComponent = () => {

//   const {stocks} = useStockContext()

//   return (
//     <>
//       {stocks?.map((item, index) => (
//         <div key={index}>
//           <b>Symbol: {item.ticker}</b>
//           <p>Quantity: {item.quantity}</p>
//           <p>Purchase price: {item.price}</p>
//           <p>Current price: {getStockPrice(item.ticker)}</p>
//         </div>
//       ))}
//     </>
//   )
// }

// export default StockDisplayComponent