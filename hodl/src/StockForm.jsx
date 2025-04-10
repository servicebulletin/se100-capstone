import { useState } from "react"
import AddNewStockComponent from "./AddNewStockComponent"

const StockForm = () => {

    const [ticker, setTicker] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')

    return (<div className='container'>
        <input 
            placeholder="Stock symbol"
            className="ticker-input"
            onChange={(event) => {
                setTicker(event.target.value)
            }}
        />
        <input 
            placeholder="Quantity"
            className="ticker-input"
            onChange={(event) => {
                setQuantity(event.target.value)
            }}
        />
        <input 
            placeholder="Purchase price"
            className="ticker-input"
            onChange={(event) => {
                setPrice(event.target.value)
            }}
        />
        <AddNewStockComponent
            ticker={ticker}
            quantity={quantity}
            price={price}
        />
    </div>)
}

export default StockForm