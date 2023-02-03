import { useState } from 'react'

function Welcome({ setWelcomeData, setPassWelcome }) {
    const [incomeValue, setIncomeValue] = useState(0)
    const [name, setName] = useState('')
    const [goals, setGoals] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if ([name, goals, incomeValue].includes('')) {
            setError('Opss, something went wrong, check again the form')

            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }

        const dataWelcome = {
            incomeValue,
            name,
            goals,
        }

        setWelcomeData(dataWelcome)
        setPassWelcome(true)
    }

    return (
        <main className="main-welcome">
            <div className="main-welcome__left">
                <img src="./img/home-Illustrator.svg" alt="" />
                <h2 className="banner">Calculate smarter, spend wiser ...</h2>
            </div>
            <div className="main-welcome__right">
                <div
                    className={`main-welcome__right__error ${
                        error && 'show-error'
                    }`}
                >
                    {error}
                </div>
                <h1 className="main-welcome__right__title">
                    monthly <span>Budget</span>
                </h1>

                <form
                    className="main-welcome__right__form"
                    onSubmit={handleSubmit}
                >
                    <div className="main-welcome__right__form__field">
                        <input
                            type="number"
                            min="0"
                            id="income"
                            placeholder="none"
                            value={incomeValue}
                            onChange={(e) =>
                                setIncomeValue(Number(e.target.value))
                            }
                        />
                        <label htmlFor="income">Insert your income</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <input
                            type="text"
                            id="name"
                            placeholder="none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Insert your name</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <input
                            type="text"
                            id="goals"
                            placeholder="none"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                        />
                        <label htmlFor="goals">Insert your goals</label>
                    </div>
                    <input
                        type="submit"
                        value="start your calculation"
                        className="btn"
                    />
                </form>
            </div>
        </main>
    )
}

export default Welcome
