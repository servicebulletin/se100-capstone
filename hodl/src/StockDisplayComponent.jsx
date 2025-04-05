import { useStockContext } from "./contexts/StockContext"

const StockDisplayComponent = () => {

  const {stocks} = useStockContext()

  console.log(stocks)

  return (
    <>
      {stocks?.map((item) => (
        <div>
          <p>{item.ticker}</p>
        </div>
      ))}
    </>
  )

}

export default StockDisplayComponent