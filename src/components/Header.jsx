function Header({ nameUser }) {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="./src/img/dollar-logo.svg" alt="" />
                <div className="header__logo--text">
                    <small>expenses</small>
                    <h1 className="h1">
                        Monthly <span>Budget</span>
                    </h1>
                </div>
            </div>
            <button className="btn">new expense</button>
            <h3 className="h3">
                <img className= "userIcon" src="./src/img/user.svg" alt="" />
                 welcome {nameUser}🖐️
                
                </h3>
        </header>
    )
}

export default Header
