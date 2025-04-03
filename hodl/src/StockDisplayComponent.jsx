import { useStockContext } from "./contexts/StockContext"

const StockDisplayComponent = () => {

  const {stocksList} = useStockContext()

  return (
    <>
      {stocksList?.map((item) => (
        <div>
          <p key={item.ticker}>{JSON.stringify(item)}</p>
        </div>
      ))}
    </>
  )

}

export default StockDisplayComponent