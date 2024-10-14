import { useState } from 'react'
import Settings from './pages/settings'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <div>
      {!started && (
        <div>
          <Settings />
        </div>
      )}
    </div>
  )
}

export default App
