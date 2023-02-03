import BoxCalculation from "./BoxCalculation"
import BoxOptional from "./BoxOptional"
import Table from "./Table"

function MainContent({welcomeData, setWelcomeData}) {
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

                <Table />
            </div>
        </main>
    )
}

export default MainContent
