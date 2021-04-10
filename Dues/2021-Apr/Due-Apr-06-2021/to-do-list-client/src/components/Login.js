import "../styles/Login.css"

const Login = ({handleClick}) => {
    return (
        <section className="section section-login">
            <form className="form">
                <div>
                    <label for="userName">Username: </label>
                    <input type="text" name="userName" placeholder="enter your username" />
                </div>
                <div>
                    <label for="userPass">Password: </label>
                    <input type="text" name="userPass" placeholder="enter your password" />
                </div>
                
                <button onClick={handleClick}>Login</button>
            </form>
        </section>
    )
}

export default Login