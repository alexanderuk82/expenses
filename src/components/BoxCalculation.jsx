import { formatCurrency } from '../helpers'

function BoxCalculation({ welcomeData, setWelcomeData }) {
    return (
        <div className="main__container__calculation">
            <h2 className="h2">Calculation</h2>
            <div className="main__container__calculation__content">
                <div className="main__container__calculation__content--income">
                    <p>income</p>
                    <h2 className="h2Income">
                        {formatCurrency(welcomeData.incomeValue)}
                    </h2>
                </div>
                <div className="main__container__calculation__content--graph">
                    <img src="./src/img/graph.svg" alt="" />
                </div>
                <div className="main__container__calculation__content__info">
                    <div className="main__container__calculation__content__info--available">
                        <p>available</p>
                        <h3 className="h3">£2,000.00</h3>
                    </div>
                    <div className="main__container__calculation__content__info--spent">
                        <p>spent</p>
                        <h3 className="h3">£2,000.00</h3>
                    </div>
                </div>
            </div>
            <button className="btn">reset expenses</button>
        </div>
    )
}

export default BoxCalculation
