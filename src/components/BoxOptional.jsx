import Option from './Option'

function BoxOptional({ welcomeData, setOption, setForm }) {
    return (
        <div className="main__container__optional">
            <h2 className="h2">Optionals</h2>
            <div className="main__container__optional__content">
                <p className="main__container__optional__content--title">
                    choose any fix expenses
                </p>

                <div className="main__container__optional__content__options">
                    <Option
                        nameItem="netflix"
                        setOption={setOption}
                        setForm={setForm}
                    />
                    <Option
                        nameItem="spotify"
                        setOption={setOption}
                        setForm={setForm}
                    />
                    <Option
                        nameItem="amazon"
                        setOption={setOption}
                        setForm={setForm}
                    />
                    <Option
                        nameItem="google"
                        setOption={setOption}
                        setForm={setForm}
                    />
                    <Option
                        nameItem="facebook"
                        setOption={setOption}
                        setForm={setForm}
                    />
                </div>
            </div>
            <div className="main__container__optional__goals">
                <h2 className="h2Goals">goals</h2>

                <div className="main__container__optional__goals--text">
                    <span></span>

                    <p>{`"${welcomeData.goals}"`}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxOptional
