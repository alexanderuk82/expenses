import { formatCurrency } from '../helpers'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function BoxCalculation({ welcomeData, available, spent, percent, expenses }) {
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
                    <CircularProgressbar
                        text={percent}
                        value={percent}
                        styles={buildStyles({
                          
                        })}
                    />
                </div>
                <div className="main__container__calculation__content__info">
                    <div className="main__container__calculation__content__info--available">
                        <p>available</p>
                        <h3 className="h3">
                            {expenses.length > 0 ? (
                                <>{formatCurrency(available)}</>
                            ) : (
                                <>{formatCurrency(welcomeData.incomeValue)}</>
                            )}
                        </h3>
                    </div>
                    <div className="main__container__calculation__content__info--spent">
                        <p>spent</p>
                        <h3 className="h3">{formatCurrency(spent)}</h3>
                    </div>
                </div>
            </div>
            <button className="btn">reset expenses</button>
        </div>
    )
}

export default BoxCalculation
