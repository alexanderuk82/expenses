import FloatingBtn from './FloatingBtn'
import Header from './Header'
import MainContent from './MainContent'
import PopupForm from './PopupForm'

function Dashboard({
    welcomeData,
    setWelcomeData,
    form,
    setForm,
    setOption,
    option,
    expenses,
    setExpenses,
    available,
    spent,
    percent,
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
                setForm={setForm}
                setOption={setOption}
                available={available}
                spent={spent}
                percent={percent}
            />

            <FloatingBtn setForm={setForm} />
            <PopupForm
                form={form}
                setForm={setForm}
                expenses={expenses}
                setExpenses={setExpenses}
                setOption={setOption}
                option={option}
            />
        </>
    )
}

export default Dashboard
