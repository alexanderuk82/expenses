function Header({ nameUser, setForm }) {
    function handleShowPopUp() {
        setForm(true)
    }
    return (
        <header className="header">
            <div className="header__logo">
                <img src="./img/dollar-logo.svg" alt="" />
                <div className="header__logo--text">
                    <small>expenses</small>
                    <h1 className="h1">
                        Monthly <span>Budget</span>
                    </h1>
                </div>
            </div>
            <button className="btn" onClick={() => handleShowPopUp()}>
                new expense
            </button>
            <h3 className="h3">
                <img className="userIcon" src="./img/user.svg" alt="" />
                welcome {nameUser}🖐️
            </h3>
        </header>
    )
}

export default Header
