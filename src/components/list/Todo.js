import { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
    const [strike, setStrike] = useState(false);
    // on todo click
    const onClickHandler = () => {
        console.log("click on");
         setStrike(true);
        props.onDone(props.index);
       
    };
    // todo edit handler
     const onEditTodoHandler = (event) => {
        event.stopPropagation();
        props.onEdit(props.index);   
     };
    return <div onClick={onClickHandler} className={`relative bg-todo ${props.todo.done && "line-through text-red-300"} px-3 py-5 shadow-xl cursor-pointer my-3 break-words`}>
        <h1 className={`${props.todo.done && "line-through text-red-300"} font-bold`}>{props.todo.heading}</h1>
        <p>{props.todo.details}</p>
        <span className="text-white block text-right"><i className="fa-regular fa-pen-to-square hover:text-red-500" onClick={onEditTodoHandler}></i></span>
    </div>
};

export default Todo;
