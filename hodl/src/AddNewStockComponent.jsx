import { useStockContext } from "./contexts/StockContext";

const AddNewStockComponent = (newStock) => {
    const { stocks, addNewStock } = useStockContext()

    const onClick = () =>
        addNewStock(newStock)

    return <button onClick={onClick}>Add Stock</button>
}

export default AddNewStockComponent
