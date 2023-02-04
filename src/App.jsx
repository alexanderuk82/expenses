import { useState } from 'react'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'

function App() {
    const [welcomeData, setWelcomeData] = useState({})
    const [passWelcome, setPassWelcome] = useState(false)
    const [form, setForm] =useState(false)
    const [option, setOption] = useState('')
    const[expenses, setExpenses]= useState([])
    return (
        <>
            {passWelcome ? (
                <Dashboard 
                    welcomeData = {welcomeData}
                    setWelcomeData = {setWelcomeData}
                    form={form}
                    setForm={setForm}
                    expenses = {expenses}
                    setExpenses = {setExpenses}
                    setOption ={setOption}    
                    option={option}            />
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
