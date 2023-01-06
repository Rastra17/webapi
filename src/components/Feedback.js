import React, { useState } from 'react'
import Statistics from './Statistics'

const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }

    const all = () => good + neutral + bad
    const average = () => (good + bad) / all()
    const positive = () => (good / all()) * 100
    return (
        <>
            <h2>Give Feedback</h2>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>

            <Statistics good={good} bad={bad} neutral={neutral} all={all} positive={positive} average={average} />
        </>
    )
}
export default Feedback
