import { useState, useEffect } from "react"
import { useStockContext } from "./contexts/StockContext"
import AddNewStockComponent from "./AddNewStockComponent"

const StockForm = () => {

    const [ticker, setTicker] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [stockData, setStockData] = useState({})

    // console.log(ticker)
    // console.log(quantity)
    // console.log(price)

    return (<div className='container'>
        <input 
            // value={ticker}
            placeholder="Stock symbol"
            className="ticker-input"
            onChange={(event) => {
                setTicker(event.target.value)
            }}
        />
        <input 
            // value={quantity}
            placeholder="Quantity"
            className="ticker-input"
            onChange={(event) => {
                setQuantity(event.target.value)
            }}
        />
        <input 
            // value={price}
            placeholder="Purchase price"
            className="ticker-input"
            onChange={(event) => {
                setPrice(event.target.value)
            }}
        />
        <AddNewStockComponent
            // stockData={stockData}
            ticker={ticker}
            quantity={quantity}
            price={price}
            // stockData={{
            //     ticker: ticker,
            //     quantity: quantity,
            //     price: price
            // }}
        />
    </div>)
}

export default StockForm