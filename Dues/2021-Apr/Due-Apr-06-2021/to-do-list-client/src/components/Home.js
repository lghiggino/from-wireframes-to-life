const Home = (props) => {
    return (
        <div>
            <h2>homeList</h2>
            <ul>
                {/* {data.map((element,idx) => {
                if (element.completed){
                    return(
                    <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="">{element.todo} <DeleteButton className="del" id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                    )
                } else{
                    return (
                    <li onClick={markOneComplete} key={idx} id={`li-${idx}`} className="simple-todo">{element.todo} <DeleteButton className="del" id={`del-${idx}`} handleClick={deleteOneTodo}></DeleteButton></li>
                    )
                }
                })} */}
            </ul>
        </div>
    )
}

export default Home