import { useStockContext } from "./contexts/StockContext"

const StockDisplayComponent = () => {

  const {stocksList} = useStockContext()

  return (
    <>
      {stocksList?.map((item) => (
        <div>
          <p>{item.stockData.ticker}</p>
        </div>
      ))}
    </>
  )

}

export default StockDisplayComponent