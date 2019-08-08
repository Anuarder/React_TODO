import "./todo_item.scss"
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        const { id, title, isCompleted } = this.props.todo;
        return(
            <div 
                className="todos__title"
                style={this.todoCompletedStyle()}>
                <label>
                    <input 
                        type="checkbox" 
                        value={isCompleted} 
                        onChange={this.props.todoComplete.bind(this, id)}/>
                    <span>
                        {title}
                    </span>
                </label>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;