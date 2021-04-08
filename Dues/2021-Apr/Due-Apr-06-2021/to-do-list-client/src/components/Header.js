import "../styles/Header.css"

const Header = (props) => {
    return (
        <header className="App-header Banana site-header">
            <img src={props.logo} className="App_logo" alt={props.altText} />
            <ul className="header-ul">
                <li className="simple-todo-header"> home </li>
                <li className="simple-todo-header"> login </li>
            </ul>
        </header>
    )
}

export default Header


