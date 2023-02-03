function Error({ children, show }) {
    return (
        <div className={`main-welcome__right__error ${show}`}>{children}</div>
    )
}

export default Error
