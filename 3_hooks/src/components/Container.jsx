
const Container = ({ children }) => {
    return (
        <div className="container">
            <h2>Se voce leu deu certo</h2>
            <h1>O PALMEIRAS</h1>
            <div>{children}</div>
            <h3>Isso precisa dar certo</h3>
        </div>
    )
}

export default Container
