import Option from './Option'

function BoxOptional({ welcomeData }) {
    return (
        <div className="main__container__optional">
            <h2 className="h2">Optionals</h2>
            <div className="main__container__optional__content">
                <p className="main__container__optional__content--title">
                    choose any fix expenses
                </p>

                <div className="main__container__optional__content__options">
                    <Option nameItem="netflix" />
                    <Option nameItem="spotify" />
                    <Option nameItem="amazon" />
                    <Option nameItem="google" />
                    <Option nameItem="facebook" />
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
