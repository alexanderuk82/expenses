import ExpenseBox from './ExpenseBox'

function Table() {
    return (
        <div className="main__container__table">
            <div className="main__container__table__content">
                <div className="main__container__table__content__top">
                    <p>Description</p>
                    <div className="main__container__table__content__top__filter">
                        <span>Filter expenses</span>
                        <select name="expense" id="format">
                            <option value="">All</option>
                            <option value="debts">debts</option>
                            <option value="food">food</option>
                            <option value="hobbie">hobbie</option>
                            <option value="rent">rent</option>
                            <option value="savings">savings</option>
                            <option value="medicine">medicine</option>
                            <option value="supscription">subscription</option>
                            <option value="various">various</option>
                        </select>
                    </div>
                </div>
                <div className="main__container__table__content__expenses">
                    <ExpenseBox />
                    <ExpenseBox />
                </div>
            </div>
        </div>
    )
}

export default Table
