import "../styles/Submit.css"

const Submit = ({handleClick}) => {
    return (
        <section className="section">
            <form className="form">
                <label for="todoItem">Enter a new item on the list:</label>
                <input type="text" name="todoItem" placeholder="enter item to submit" />
                <button onClick={handleClick}>Create Todo</button>
            </form>
        </section>
    )
}

export default Submit