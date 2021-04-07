const DeleteButton = (props) => {
    return(
      <button id={props.id} onClick={props.handleClick} className={props.className}>X</button>
    )
  }

export default DeleteButton