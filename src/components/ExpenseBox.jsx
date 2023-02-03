import { getDate } from '../helpers'

function ExpenseBox() {
    return (
        <div className="main__container__table__content__expenses__spent">
            <div className="main__container__table__content__expenses__spent__default">
                <div className="main__container__table__content__expenses__spent--left">
                    <img src="./src/img/debts.svg" alt="debts" />
                    <div className="main__container__table__content__expenses__spent--category">
                        <h2 className="h2Category">debts</h2>
                        <small>
                            date: <span>{getDate()}</span>
                        </small>
                    </div>
                </div>
                <div className="main__container__table__content__expenses__spent--amount">
                    £125,00
                </div>
            <div className="main__container__table__content__expenses__spent__hover">
                    <button className="editar">
                        <img src="./src/img/edit-icon.svg" alt="edit" />
                        edit
                    </button>
                    <button className="delete">
                        <img src="./src/img/delete-icon.svg" alt="edit" />
                        delete
                    </button>
            </div>
            </div>

        </div>
    )
}

export default ExpenseBox
