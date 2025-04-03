import StockForm from './StockForm'
import StockContext from './contexts/StockContext'
import './App.css'

function App() {
  return (<>
    <StockContext.Provider value={{}}>
      <StockForm />
    </StockContext.Provider>
  </>) 
}

export default App