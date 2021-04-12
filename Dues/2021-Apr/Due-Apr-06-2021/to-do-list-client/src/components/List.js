import ListItem from "./ListItem.js"

const List = (props) => {
    return (
      <ul>
        {props.data.map((singleElement, idx) => 
        //ternary controls the CSS classes
          singleElement.completed ? 
            <ListItem handleClick={props.handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} className="" deleteAction={props.deleteAction}></ListItem> :
            <ListItem handleClick={props.handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} className="simple-todo" deleteAction={props.deleteAction}></ListItem>
        )}
      </ul>
    )
}

export default List