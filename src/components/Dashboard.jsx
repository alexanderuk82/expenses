import FloatingBtn from './FloatingBtn'
import Header from './Header'
import MainContent from './MainContent'
import PopupForm from './PopupForm'

function Dashboard({
    welcomeData,
    setWelcomeData,
    form,
    setForm,
    expenses,
    setExpenses,
}) {
    const { incomeValue, name, goals } = welcomeData
    return (
        <>
            <Header nameUser={name} />

            <MainContent
                welcomeData={welcomeData}
                setWelcomeData={setWelcomeData}
                expenses={expenses}
                setExpenses={setExpenses}
            />

            <FloatingBtn setForm={setForm} />
            <PopupForm
                form={form}
                setForm={setForm}
                expenses={expenses}
                setExpenses={setExpenses}
            />
        </>
    )
}

export default Dashboard
