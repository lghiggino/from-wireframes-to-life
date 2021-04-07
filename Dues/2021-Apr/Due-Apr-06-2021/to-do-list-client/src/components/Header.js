const Header = (props) => {
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt={props.altText} />
        </header>
    )
}

export default Header