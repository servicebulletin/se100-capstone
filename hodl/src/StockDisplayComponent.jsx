import { useStockContext } from "./contexts/StockContext"
import { useCallback } from "react"

const StockDisplayComponent = () => {

  const {stocks} = useStockContext()

  const getStockPrice = useCallback(async (ticker) => {

    try {

      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`
      )
      const data = await res.json()
      const price = data['Global Quote']?.['05. price']

      // console.log("Price:", price)

      return price

    } catch (err) {

      console.error("Error fetching stock price:", err)
      return 0

    }

  }, []);

  return (
    <>
      {stocks?.map((item, index) => (
        <div key={index}>
          <b>Symbol: {item.ticker}</b>
          <p>Quantity: {item.quantity}</p>
          <p>Purchase price: {item.price}</p>
          <p>Current price: {getStockPrice(item.ticker)}</p>
        </div>
      ))}
    </>
  )
}

export default StockDisplayComponent