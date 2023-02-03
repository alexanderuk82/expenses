import FloatingBtn from './FloatingBtn'
import Header from './Header'
import MainContent from './MainContent'
import PopupForm from './PopupForm'

function Dashboard({ welcomeData, setWelcomeData, form, setForm }) {
    const { incomeValue, name, goals } = welcomeData
    return (
        <>
            <Header nameUser={name} />

            <MainContent
                welcomeData={welcomeData}
                setWelcomeData={setWelcomeData}
            />

            <FloatingBtn setForm={setForm} />
            <PopupForm form={form} setForm={setForm} />
        </>
    )
}

export default Dashboard
