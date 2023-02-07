import { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'

function App() {
    const [welcomeData, setWelcomeData] = useState(
        JSON.parse(localStorage.getItem('user')) ?? {}
    )
    const [passWelcome, setPassWelcome] = useState(false)
    const [form, setForm] = useState(false)
    const [option, setOption] = useState('')
    const [expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem('expenses')) ?? []
    )
    const [spent, setSpent] = useState(0)
    const [available, setAvailable] = useState(0)
    const [percent, setPercent] = useState(0)
    const { incomeValue } = welcomeData
    const [selected, setSelected] = useState({})
    const [filter, setFilter] = useState('')
    const [filterResult, setFilterFilterResult] = useState([])

    const localStorageData = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        if (localStorageData) {
            setPassWelcome(true)
            return
        }
        setPassWelcome(false)
    }, [])

    //results filtering

   

    useEffect(() => {
        if (filter) {
            const getResult = expenses.filter(
                (item) => item.category === filter
            )
            setFilterFilterResult(getResult)
        }
    }, [filter])

    useEffect(() => {
        if (expenses.length > 0) {
            const totalSpent = expenses.reduce(
                (total, amountSpent) => amountSpent.amount + total,
                0
            )
            const totalAvailable = incomeValue - totalSpent
            const percentSpent = (
                (100 * (incomeValue - totalAvailable)) /
                incomeValue
            ).toFixed(1)

            setTimeout(() => {
                setSpent(totalSpent)
                setAvailable(totalAvailable)
                setPercent(percentSpent)
                return
            }, 1000)
        } else {
            setPercent(0)
        }
    }, [expenses])

    //Remove item

    const removeItem = (id) => {
        const removeId = expenses.filter((item) => item.id !== id)
        setExpenses(removeId)
    }

    //Save in the local Storage

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(welcomeData))
    }, [welcomeData])

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

    return (
        <>
            {passWelcome ? (
                <Dashboard
                    welcomeData={welcomeData}
                    setWelcomeData={setWelcomeData}
                    form={form}
                    setForm={setForm}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setOption={setOption}
                    option={option}
                    available={available}
                    spent={spent}
                    percent={percent}
                    selected={selected}
                    setSelected={setSelected}
                    removeItem={removeItem}
                    setPassWelcome={setPassWelcome}
                    filter={filter}
                    setFilter={setFilter}
                    filterResult={filterResult}
                    setFilterFilterResult={setFilterFilterResult}
                />
            ) : (
                <>
                    <Welcome
                        setWelcomeData={setWelcomeData}
                        setPassWelcome={setPassWelcome}
                    />
                </>
            )}
        </>
    )
}

export default App
