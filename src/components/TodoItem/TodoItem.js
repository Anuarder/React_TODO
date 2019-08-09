import "./todo_item.scss"
import React, { Component } from 'react'
import PropTypes from 'prop-types'

function TodoTitle(props){
    return (
        <label>
            <input
                type="checkbox" 
                value={props.isCompleted} 
                onChange={props.onChange}/>
            <span>
                {props.title}
            </span>
        </label>
    )
}
function TodoEdit(props){
    return (
        <input 
            type="text" 
            value={props.title} 
            onChange={props.onChange}/>
    )
}

class TodoItem extends Component{
    todoCompletedStyle = () =>{
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

    render(){
        const { id, title, isEdit, isCompleted } = this.props.todo;
        let todo_content;
        if(!isEdit){
            todo_content = <TodoTitle 
                                isCompleted={isCompleted} 
                                onChange={this.props.todoComplete.bind(this, id)} 
                                title={title}
                                id={id}/>
        }else{
            todo_content = <TodoEdit 
                                title={title}
                                id={id}
                                onChange={this.props.editTitle.bind(this)}/>
        }
        return(
            <div className="todo-item">
                <div
                    className="todo-item__title"
                    style={this.todoCompletedStyle()}
                    onDoubleClick={this.props.editTodo.bind(this, id)}>
                    {todo_content}
                    <button onClick = {this.props.deleteTodo.bind(this, id)}>
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