function Option({nameItem}) {
    return (
        <div className="main__container__optional__content__options__item">
            <div className="main__container__optional__content__options__item--logo">
                <img src={`./img/logo-${nameItem}.svg`} alt={`${nameItem}`}/>
                <p>{nameItem}</p>
            </div>
            <input type="button" value="select" className="main__container__optional__content__options__item--select"/>
        </div>
    )
}

export default Option
