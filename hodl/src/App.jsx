import StockForm from './StockForm'
import StockDisplayComponent from './StockDisplayComponent'
import AddNewStockComponent from './AddNewStockComponent'
import './App.css'
import StockProvider from './contexts/StockContext'

function App() {
  return (<>
    <StockProvider>
      <StockForm/>
      <StockDisplayComponent/>
    </StockProvider>
  </>) 
}

export default App