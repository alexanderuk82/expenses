import ExpenseBox from './ExpenseBox'

function Table({
    setExpenses,
    expenses,
    selected,
    setSelected,
    removeItem,
    filter,
    setFilter,
    filterResult,
}) {
    return (
        <div className="main__container__table">
            <div className="main__container__table__content">
                <div className="main__container__table__content__top">
                    <p>Description</p>
                    <div className="main__container__table__content__top__filter">
                        <span>Filter expenses</span>
                        <select
                            name="expense"
                            id="format"
                            onChange={(e) => setFilter(e.target.value)}
                        >
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
                    {expenses.length > 0 ? (
                        <>
                            {filter ? (
                                <>
                                    {filterResult.length > 0 ? (
                                        <>
                                            {filterResult.map((spent) => {
                                                return (
                                                    <ExpenseBox
                                                        spent={spent}
                                                        key={spent.id}
                                                        setSelected={
                                                            setSelected
                                                        }
                                                        removeItem={removeItem}
                                                    />
                                                )
                                            })}
                                        </>
                                    ) : (
                                        <>
                                            <div className="main__container__table__content__expenses--message">
                                                <h2 className="h2Table">
                                                    looks like you haven't added
                                                    any{' '}
                                                    <span>expenses yet</span>
                                                </h2>

                                                <img
                                                    src="./img/cart.svg"
                                                    alt="add expense"
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    {expenses.map((spent) => {
                                        return (
                                            <ExpenseBox
                                                spent={spent}
                                                key={spent.id}
                                                setSelected={setSelected}
                                                removeItem={removeItem}
                                                filterResult={filterResult}
                                            />
                                        )
                                    })}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="main__container__table__content__expenses--message">
                                <h2 className="h2Table">
                                    looks like you haven't added any{' '}
                                    <span>expenses yet.</span>
                                </h2>
                                <p>
                                    No worries, just hit the <span>'Add'</span>{' '}
                                    button to get started
                                </p>
                                <img src="./img/cart.svg" alt="add expense" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Table
