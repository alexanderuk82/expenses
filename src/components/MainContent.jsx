import BoxCalculation from './BoxCalculation'
import BoxOptional from './BoxOptional'
import Table from './Table'

function MainContent({
    welcomeData,
    setWelcomeData,
    setExpenses,
    expenses,
    setOption,
    setForm,
    available,
    spent,
    percent
}) {
    return (
        <main className="main">
            <div className="main__container">
                <BoxCalculation
                    welcomeData={welcomeData}
                    setWelcomeData={setWelcomeData}
                    available={available}
                    spent={spent}
                    percent={percent}
                    expenses={expenses}
                />
                <BoxOptional 
                welcomeData={welcomeData} 
                setOption ={setOption}
                setForm={setForm}
                />

                <Table expenses={expenses} setExpenses={setExpenses} />
            </div>
        </main>
    )
}

export default MainContent
