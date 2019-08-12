import "./todo_item.scss"
import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, editTodo, todoComplete, editTitle, endEdit, deleteTodo }) => {
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
                            onChange={todoComplete.bind(this, id)}/>
                        <span>
                            {title}
                        </span>
                    </div>
                    :  
                    <input 
                        type="text" 
                        value={title} 
                        onChange={editTitle.bind(this, id)}
                        onKeyUp={endEdit.bind(this, id)}/>
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