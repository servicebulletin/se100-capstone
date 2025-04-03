import { useState, useEffect } from "react"
import AddNewStockComponent from "./AddNewStockComponent"

const StockForm = () => {

    const [ticker, setTicker] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')

    return (<div className='container'>
        <input 
            // value={ticker}
            placeholder="Stock symbol"
            className="ticker-input"
            onChange={(event) => {
                setTicker(event.target.value)
                console.log(ticker)
            }}
        />
        <input 
            // value={quantity}
            placeholder="Quantity"
            className="ticker-input"
            onChange={(event) => {
                setQuantity(event.target.value)
                console.log(quantity)
            }}
        />
        <input 
            // value={price}
            placeholder="Purchase price"
            className="ticker-input"
            onChange={(event) => {
                setPrice(event.target.value)
                console.log(price)
            }}
        />
        <AddNewStockComponent
            stockData={{
                ticker: ticker,
                quantity: quantity,
                price: price
            }}
        />

    </div>)
}

export default StockForm