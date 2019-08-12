import "./todo_item.scss"
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    todoCompletedStyle = () =>{ // computed
        if(this.props.todo.isCompleted){
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

    // template
    render(){
        const { editTodo, todoComplete, editTitle, endEdit, deleteTodo, todo } = this.props;
        const { id, title, isEdit, isCompleted } = todo;
        return(
            <div className="todo-item">
                <div
                    className="todo-item__title"
                    style={this.todoCompletedStyle()}
                    onDoubleClick={editTodo.bind(this, id)}>
                    {
                        !isEdit
                        ? 
                        <div className="todo__label">
                            <input
                                type="checkbox" 
                                value={isCompleted} 
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
                    <button onClick = {deleteTodo.bind(this, id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;