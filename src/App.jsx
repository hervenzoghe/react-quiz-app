import './App.css'
import { useState } from 'react'
import SelectCategory from './components/SelectCategory'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div>
      {!started && (
        <div>
          <h1>Welcome in our quiz !</h1>
          <button onClick={() => setStarted(true)}>Start playing now</button>
        </div>
      )}
      {started && <SelectCategory />}
    </div>
  )
}

export default App
