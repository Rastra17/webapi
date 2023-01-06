const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (
        <>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {all()}</p>
            <p>Average: {average()}</p>
            <p>Positive: {positive()}</p>
        </>
    )
}

export default Statistics;