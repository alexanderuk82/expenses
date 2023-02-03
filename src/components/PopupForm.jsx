function PopupForm({ form, setForm }) {
    function handleHidePopUp() {
        setForm(false)
    }

    return (
        <div className={`popup ${form ? 'show' : 'hide'}`}>
            <div className="popup__container">
                <button className="closeIcon" onClick={() => handleHidePopUp()}>
                    <img src="./src/img/icon-close.svg" alt="close popup" />
                </button>

                <h1 className="popup__container__title">
                    monthly <span>Budget</span>
                </h1>
                <p>insert below your current spent</p>

                <form className="main-welcome__right__form mt-7">
                    <div className="main-welcome__right__form__field">
                        <input
                            type="number"
                            id="income"
                            placeholder="none"
                            // value={incomeValue}
                            // onChange={(e) =>
                            //     setIncomeValue(Number(e.target.value))
                            // }
                        />
                        <label htmlFor="income">Insert the amount</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <input
                            type="text"
                            id="spentName"
                            placeholder="none"
                            // value={incomeValue}
                            // onChange={(e) =>
                            //     setIncomeValue(Number(e.target.value))
                            // }
                        />
                        <label htmlFor="spentName">Name expenses</label>
                    </div>
                    <div className="main-welcome__right__form__field">
                        <select name="expense" id="category">
                            <option disabled selected>
                                select category
                            </option>
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
                        value="start your calculation"
                        className="btn"
                    />
                </form>
            </div>
        </div>
    )
}

export default PopupForm
