import React from 'react'
import './TodoList.css'

interface TodoListProps {
  items: {
    id: string
    text: string
  }[]

  onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* Need to bind since the todo.id since it is not a function call we are */}
          {/* passing instead it is a function pointer. */}
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
