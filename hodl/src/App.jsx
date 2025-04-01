import StockForm from './StockForm'
import './App.css'

function App() {
  return (<>
    <StockContext.Provider value={{}}>
      <StockForm />
    </StockContext.Provider>
  </>) 
}

export default App