import { useState, useEffect } from 'react'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'

function App() {
    const [welcomeData, setWelcomeData] = useState({})
    const [passWelcome, setPassWelcome] = useState(false)
    const [form, setForm] = useState(false)
    const [option, setOption] = useState('')
    const [expenses, setExpenses] = useState([])
    const [spent, setSpent] = useState(0)
    const [available, setAvailable] = useState(0)
    const [percent, setPercent] = useState(0)
    const { incomeValue } = welcomeData
    const [selected, setSelected] = useState({})
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
            ).toFixed(2)

            setTimeout(() => {
                setSpent(totalSpent)
                setAvailable(totalAvailable)
                setPercent(percentSpent)
                return
            }, 1000)
        }
    }, [expenses])

    //Remove item

    const removeItem = (id) =>{

        const removeId = expenses.filter(item => item.id !== id)
        setExpenses(removeId)
    }


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
                    selected ={selected}
                    setSelected ={setSelected}
                    removeItem={removeItem}
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
