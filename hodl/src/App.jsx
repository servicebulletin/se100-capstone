import StockForm from './StockForm'
import StockDisplayComponent from './StockDisplayComponent'
import './App.css'
import StockProvider from './contexts/StockContext'

function App() {
  return (
    <div className="app-wrapper">
      <h1>🚀💎🙌HODL🙌💎🚀</h1>
      <StockProvider>
        <StockForm/>
        <h3>Where your groceries money went:</h3>
        <StockDisplayComponent/>
      </StockProvider>
    </div>
  ) 
}

export default App