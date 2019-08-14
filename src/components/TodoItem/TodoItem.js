import "./todo_item.scss"
import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, editTodo, todoComplete, editTitle, endEdit, deleteTodo, currentEditTodo }) => {
    const { id, title, isEdit, isCompleted } = todo;

    const todoCompletedStyle = () => {
        if(todo.isCompleted){
            return {
                textDecoration: "line-through",
                color: "green"
            }
        }else{
            return {
                textDecoration: "none"
            }
        }
    }
    
    return(
        <div className="todo-item">
            <div
                className="todo-item__title"
                style={todoCompletedStyle()}
                onDoubleClick={() => editTodo(id)}>
                {
                    !isEdit
                    ? 
                    <div className="todo__label">
                        <input
                            type="checkbox" 
                            defaultChecked={isCompleted}
                            onChange={() => todoComplete(id)}/>
                        <span>
                            {title}
                        </span>
                    </div>
                    :  
                    <input  
                        type="text" 
                        value={currentEditTodo}
                        onChange={(e) => editTitle(e.target.value)}
                        onKeyUp={(e) => endEdit(id, e.key)}/>
                }
                <button onClick = {() => deleteTodo(id)}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;