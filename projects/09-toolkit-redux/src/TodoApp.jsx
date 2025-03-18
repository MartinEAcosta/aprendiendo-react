import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const { data: todo , isLoading } = useGetTodoByIdQuery(todoId);

    console.log(todo);

    const onNextTodo = ( ) =>{
        setTodoId( todoId + 1 );
    }

    const onPrevTodo = ( ) => {
        if( todoId != 1) 
            setTodoId(todoId - 1 );
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            <pre> { JSON.stringify( todo ) }</pre>


            {/* <ul>
                {
                    todos.map( todo => (
                        <li key={todo.id}>
                            <strong> { todo.completed ? 'DONE ' : 'PENDING ' }</strong>
                            { todo.title }
                        </li>
                    ) )
                }
            </ul> */}

            <button
                onClick={ onPrevTodo }>
                Prev Todo
            </button>
            <button
                onClick={ onNextTodo }>
                Next Todo
            </button>
        </>
    )
}
