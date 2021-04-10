import "../styles/Header.css"

const Header = ( {logo, altText, setPage}) => {
    return (
        <header className="App-header Banana site-header">
            <img src={logo} className="App_logo" alt={altText} />
            <ul className="header-ul">
                <li className="simple-todo-header" onClick={() => {setPage("home")}}> home </li>
                <li className="simple-todo-header" onClick={() => {setPage("login")}}> login </li>
                <li className="simple-todo-header" onClick={() => {setPage("submit")}}> submit </li>
            </ul>
        </header>
    )
}

export default Header


