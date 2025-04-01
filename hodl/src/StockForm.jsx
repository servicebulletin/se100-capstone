import { useEffect, useState } from "react"

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

    </div>)
}

export default StockForm