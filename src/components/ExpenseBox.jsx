import { getDate, formatCurrency } from '../helpers'

function ExpenseBox({ spent, setSelected, removeItem }) {
    const { amount, category, nameExpense } = spent

    function handleEditingSpent(item) {
        setSelected(item)
    }

    function handleRemove(id) {
        const answer = confirm(
            '🚫🚫 Are you sure do you want to remove this expense?'
        )

        if (answer) {
            removeItem(id)
        }
    }

    return (
        <div className="main__container__table__content__expenses__spent">
            <div className="main__container__table__content__expenses__spent__default">
                <div className="main__container__table__content__expenses__spent--left">
                    <img
                        src={`../img/${spent.category}.svg`}
                        alt={`spent.category`}
                    />
                    <div className="main__container__table__content__expenses__spent--category">
                        <h2 className="h2Category">{category}</h2>
                        <small>
                            company name: <span>{nameExpense}</span>
                        </small>
                        <small>
                            date: <span>{getDate()}</span>
                        </small>
                    </div>
                </div>
                <div className="main__container__table__content__expenses__spent--amount">
                    {formatCurrency(amount)}
                </div>
                <div className="main__container__table__content__expenses__spent__hover">
                    <button
                        className="editar"
                        onClick={() => handleEditingSpent(spent)}
                    >
                        <img src="./img/edit-icon.svg" alt="edit" />
                        edit
                    </button>
                    <button
                        className="delete"
                        onClick={() => handleRemove(spent.id)}
                    >
                        <img src="./img/delete-icon.svg" alt="edit" />
                        delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExpenseBox
