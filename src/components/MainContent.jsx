import BoxCalculation from "./BoxCalculation"
import BoxOptional from "./BoxOptional"
import Table from "./Table"

function MainContent({welcomeData, setWelcomeData, setExpenses, expenses}) {
    return (
        <main className="main">
            <div className="main__container">
                <BoxCalculation 
                     welcomeData={welcomeData}
                     setWelcomeData={setWelcomeData}
                />
                <BoxOptional 
                     welcomeData={welcomeData}
                />

                <Table 
                expenses={expenses}
                setExpenses={setExpenses}
                />
            </div>
        </main>
    )
}

export default MainContent
