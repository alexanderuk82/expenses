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
    percent,
    selected,
    setSelected,
    removeItem
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
                    setOption={setOption}
                    setForm={setForm}
                />

                <Table
                    expenses={expenses}
                    setExpenses={setExpenses}
                    selected={selected}
                    setSelected={setSelected}
                    removeItem={removeItem}
                />
            </div>
        </main>
    )
}

export default MainContent
