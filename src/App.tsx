import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Increment 테스트
      </button>
      {count}
      <div>
        테스트
      </div>
    </div>
  )
}

export default App
