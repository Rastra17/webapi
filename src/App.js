import React, { useState } from 'react'
import Feedback from './components/Feedback'

const App = ({ name, age }) => {
    const [counter, setCounter] = useState(0)
    console.log(`Rendering ${counter}...`)
    const handlePlus = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Hello {name}, You're {age} years old!</h1>
            <h2>{counter}</h2>
            <button onClick={handlePlus}>Increment</button>
            <Feedback />
        </div>
    )
}

export default App