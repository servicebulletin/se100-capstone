import { useStockContext } from "./contexts/StockContext";

const AddNewStockComponent = (stockData) => {
    const { stocks, addNewStock } = useStockContext()

    const onClick = () => {
        addNewStock(stockData)
        console.log(stocks)
    }

    return <button onClick={onClick}>Add Stock</button>
}

export default AddNewStockComponent
