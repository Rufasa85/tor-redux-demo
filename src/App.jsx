
import First from './components/First'
import "./App.css"
import CountProvider from './utils/countContext'

function App() {


  return (
    <>
      <CountProvider>
       <First/>
      </CountProvider>
      <CountProvider>
       <First/>
      </CountProvider>
    </>
  )
}

export default App
