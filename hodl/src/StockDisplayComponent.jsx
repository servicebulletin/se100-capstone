import { useStockContext } from "./contexts/StockContext"

const StockDisplayComponent = () => {

  const {stocksList} = useStockContext()

  return (
    <>
      {stocksList?.map((item) => (
        <p key={item.ticker}>{JSON.stringify(item)}</p>
      ))}
    </>
  )

}

export default StockDisplayComponent