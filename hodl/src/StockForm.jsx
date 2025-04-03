import { useEffect, useState, useContext } from "react"
import StockContext from "./contexts/StockContext"

const StockForm = () => {

    const [ticker, setTicker] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()

    return (<div className='container'>
        <input 
            value={ticker}
            placeholder="Stock symbol"
            className="ticker-input"
            onChange={(event) => setTicker(event.target.value)}
        />
        <input 
            value={quantity}
            placeholder="Quantity"
            className="ticker-input"
            onChange={(event) => setQuantity(event.target.value)}
        />
        <input 
            value={price}
            placeholder="Purchase price"
            className="ticker-input"
            onChange={(event) => setPrice(event.target.value)}
        />
        <button
            type="button"
            onClick={() => {
                const newStock = {
                    ticker: ticker,
                    quantity: quantity,
                    price: price
                }
            }}
        >
            Add Stock
        </button>

    </div>)
}

export default StockForm