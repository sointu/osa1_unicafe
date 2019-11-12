import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    if (props.text === "good") {
        return (
            <button onClick={() => {
                props.setAll(props.allReviews.concat(1))
                props.setGood(props.good + 1)

            }}>
                good
        </button>
        )
    } else if (props.text === "neutral") {
        return (
            <button onClick={() => {
                props.setAll(props.allReviews.concat(0))
                props.setNeutral(props.neutral + 1)
            }}>
                neutral
        </button>
        )
    } else {
        return (
            <button onClick={() => {
                props.setAll(props.allReviews.concat(-1))
                props.setBad(props.bad + 1)
            }}>
                bad
    </button>
        )
    }
}

const NoFeedback = (props) => {
    if (props.allReviews.length === 0) {
        return (
            <><p>No feedback given.</p></>
        )
    } else {
        return null
    }
}
const Statistic = (props) => {

    let all = props.allReviews.length
    let sum = 0
    let average = 0
    let positive = 0
    let prosPosit = 0

    if (all > 0 && props.text === "Good: ") {
        return (
            <><tr><td>Good:</td><td>{props.good}</td></tr></>
        )
    } else if (all > 0 && props.text === "Neutral: ") {
        return (
            <><tr><td>Neutral:</td><td>{props.neutral}</td></tr></>
        )
    } else if (all > 0 && props.text === "Bad: ") {
        return (
            <><tr><td>Bad:</td><td>{props.bad}</td></tr></>
        )
    } else if (all > 0 && props.text === "Average: ") {
        for (let i = 0; i < all; i++) {
            sum += props.allReviews[i];
        }
        average = sum / all
        average = Math.round(average * 10) / 10
        return (
            <><tr><td>Average:</td><td>{average}</td></tr></>
        )
    } else if (all > 0 && props.text === "Positive: ") {
        for (let i = 0; i < all; i++) {
            if (props.allReviews[i] === 1)
                positive++;
        }
        prosPosit = (positive / all) * 100
        prosPosit = Math.round(prosPosit * 10) / 10
        return (
            <><tr><td>Positive:</td><td>{prosPosit}%</td></tr></>
        )
    } else if (all > 0 && props.text === "All: ") {
        return (
            <><tr><td>All:</td><td>{all}</td></tr></>
        )
    } else {
        return null
    }

}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allReviews, setAll] = useState([])

    return (
        <div>
            <h1>Give feedback</h1>
            <Button
                text="good"
                good={good}
                setGood={setGood}
                allReviews={allReviews}
                setAll={setAll}
            />
            <Button
                text="neutral"
                neutral={neutral}
                setNeutral={setNeutral}
                allReviews={allReviews}
                setAll={setAll}
            />
            <Button
                text="bad"
                bad={bad}
                setBad={setBad}
                allReviews={allReviews}
                setAll={setAll}
            />


            <h2>Statistics</h2>

            

            <NoFeedback
                allReviews={allReviews}
            />

            <table>
                <tbody>

                    <Statistic
                        allReviews={allReviews}
                        good={good}
                        text={"Good: "}
                    />
                    <Statistic
                        allReviews={allReviews}
                        neutral={neutral}
                        text={"Neutral: "}
                    />
                    <Statistic
                        allReviews={allReviews}
                        bad={bad}
                        text={"Bad: "}
                    />
                    <Statistic
                        allReviews={allReviews}
                        text={"All: "}
                    />
                    <Statistic
                        allReviews={allReviews}
                        text={"Average: "}
                    />
                    <Statistic
                        allReviews={allReviews}
                        text={"Positive: "}
                    />
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
