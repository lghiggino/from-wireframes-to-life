import "../styles/Header.css"

const Header = ( {logo, altText, setPage}) => {
    function pageSetter(e){
        return setPage(e.target.innerText)
    }

    return (
        <header className="App-header Banana site-header">
            <img src={logo} className="App_logo" alt={altText} />
            <ul className="header-ul">
                <li className="simple-todo-header" onClick={pageSetter}> login </li>
                <li className="simple-todo-header" onClick={pageSetter}> list </li>
                <li className="simple-todo-header" onClick={pageSetter}> submit </li>
            </ul>
        </header>
    )
}

export default Header


