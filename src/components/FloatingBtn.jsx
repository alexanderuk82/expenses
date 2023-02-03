function FloatingBtn({ setForm }) {
    function handleShowPopUp() {
        setForm(true)
    }

    return (
        <button className="floatIcon" onClick={() => handleShowPopUp()}>
            <img src="./src/img/icon-add.svg" alt="add expenses" />
        </button>
    )
}

export default FloatingBtn
