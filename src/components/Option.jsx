function Option({ nameItem, setOption, setForm }) {
    function handleClickOption(element) {
        setOption(element)
        setForm(true)
    }
    return (
        <div className="main__container__optional__content__options__item">
            <div className="main__container__optional__content__options__item--logo">
                <img src={`./img/logo-${nameItem}.svg`} alt={`${nameItem}`} />
                <p>{nameItem}</p>
            </div>
            <input
                data-name={`${nameItem}`}
                type="button"
                value="select"
                className="main__container__optional__content__options__item--select"
                onClick={(e) => handleClickOption(e.target.dataset.name)}
            />
        </div>
    )
}

export default Option
