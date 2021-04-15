const DeleteButton = (props) => {
    return(
      <button id={props.id} onClick={props.handleClick} className="del">X</button>
    )
  }

export default DeleteButton