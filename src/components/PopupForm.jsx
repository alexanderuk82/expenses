import { useState, useEffect } from 'react'

import { getId, getDate } from '../helpers'

function PopupForm({
    form,
    setForm,
    setExpenses,
    expenses,
    option,
    setOption,
    selected,
    setSelected,
    filterResult,
    setFilterFilterResult,
}) {
    function handleHidePopUp() {
        setForm(false)
        setSelected({})
        setAmount(0)
        setCategory('')
        setNameExpense('')
        setOption('')
    }

    const [amount, setAmount] = useState(0)
    const [nameExpense, setNameExpense] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (option) {
            setNameExpense(option)
        }
    }, [option])

    useEffect(() => {
        if (Object.keys(selected).length > 0) {
            setForm(true)
            setAmount(selected.amount)
            setNameExpense(selected.nameExpense)
            setCategory(selected.category)
        }
    }, [selected])

    function handleAddExpense(e) {
        e.preventDefault()

        if ([amount, nameExpense, category].includes('')) {
            setError('😧 Opss, something went wrong, check again the form')

            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }

        const objExpense = {
            amount,
            nameExpense,
            category,
            date: getDate(),
        }

        if (selected.id) {
            objExpense.id = selected.id

            if (filterResult.length > 0) {
                const spentUpdatedFiltered = filterResult.map((spentState) =>
                    spentState.id === selected.id ? objExpense : spentState
                )

                setFilterFilterResult(spentUpdatedFiltered)
                setSelected({})
            }

            const spentUpdated = expenses.map((spentState) =>
                spentState.id === selected.id ? objExpense : spentState
            )

            setExpenses(spentUpdated)
            setSelected({})
        } else {
            ;(objExpense.id = getId()), setExpenses([objExpense, ...expenses])
        }

        setForm(false)
        setAmount(0)
        setCategory('')
        setNameExpense('')
        setOption('')
    }

    return (
        <div className={`popup ${form ? 'show' : 'hide'}`}>
            <div className="popup__container">
                <button className="closeIcon" onClick={() => handleHidePopUp()}>
                    <img src="./img/icon-close.svg" alt="close popup" />
                </button>
                <div
                    className={`main-welcome__right__error ${
                        error && 'show-error'
                    }`}
                >
                    {error}
                </div>
                <h1 className="popup__container__title">
                    monthly <span>Budget</span>
                </h1>
                <p>insert below your current spent</p>

                <form
                    className="main-welcome__right__form mt-7"
                    onSubmit={handleAddExpense}
                >
                    <div className="main-welcome__right__form__field">
                        <input
                            type="number"
                            min="0"
                            id="income"
                            placeholder="none"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                        <label htmlFor="income">Insert the amount</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <input
                            type="text"
                            id="spentName"
                            placeholder="none"
                            value={nameExpense}
                            onChange={(e) => setNameExpense(e.target.value)}
                        />
                        <label htmlFor="spentName">Name for expenses</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <select
                            name="expense"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>select category</option>
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

                    <input
                        type="submit"
                        value={`${
                            Object.keys(selected).length > 0
                                ? 'Save changes'
                                : 'Add new expense'
                        }`}
                        className="btn"
                    />
                </form>
            </div>
        </div>
    )
}

export default PopupForm
