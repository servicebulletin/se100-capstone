import { useStockContext } from "./contexts/StockContext"

const StockDisplayComponent = () => {

  const {stocksList} = useStockContext()

  return (
    <>
      {stocksList?.map((item) => (
        <div>
          <p>{JSON.stringify(item.stockData)}</p>
        </div>
      ))}
    </>
  )

}

export default StockDisplayComponent