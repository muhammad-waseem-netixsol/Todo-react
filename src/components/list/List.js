import { useEffect, useState } from "react";
import Todo from "./Todo";

const List = (props) => {
    console.log(props.todos);
    // on click todo
    function onTodoClickHandler(index) {
        props.onDoneTodo(index);
    };
    // onedit props 
    const todoEditHandler = (index) => {
        props.onEditTodo(index);
    };
    // on clear all handler
    const onClearAllHandler = () => {
        props.onClearAllTodos();
    };
    return <div className="bg-card rounded-md p-5">
        <div className="flex justify-start items-center gap-5 py-5 border-b border-gray-800">
            <p className="flex justify-center items-center">Left <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{props.left}</span></p>
            <p className="flex justify-center items-center">Done <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{props.done}</span></p>
            <div className="ml-auto"><button className="bg-red-600 py-1 px-2 rounded hover:opacity-90" onClick={onClearAllHandler}>Clear All</button></div>
        </div>
        {props.todos !== null ?  props.todos.map((todo, i) => {
            return <div key={Math.random()}>
                <Todo todo={todo} index={i} onDone={onTodoClickHandler} onEdit={todoEditHandler}/></div>
        }) : <h1 className="text-white font-extrabold text-center py-5">No Todo Created!</h1>}
    </div>
};

export default List;