import DeleteButton from "./DeleteButton.js"

const ListItem = (props) => {
    return (
      <li onClick={props.handleClick} key={props.key} id={props.id} className={props.className}>{props.todo} <DeleteButton id={`del-${props.id}`} handleClick={props.deleteAction}/></li>
    )
}

export default ListItem