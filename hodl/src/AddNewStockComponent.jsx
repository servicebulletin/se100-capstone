import { useStockContext } from "./contexts/StockContext";

const AddNewStockComponent = (props) => {
    const { stocks, addNewStock } = useStockContext()
    // console.log(stocks)

    const onClick = () => {
        addNewStock({
            price : props.price,
            ticker : props.ticker,
            quantity : props.quantity
        })
    }

    return <button onClick={onClick}>Add Stock</button>
}

export default AddNewStockComponent
