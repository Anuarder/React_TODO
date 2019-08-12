import React, { Component } from 'react'
import "./filter_todo.scss"

class FilterTodo extends Component{

    isCompleted = () => {
        return this.props.filter === "completed"
    }

    render(){
        return (
            <div className="todos__filter">
                <button 
                    className={this.isCompleted() ? "todos__filter-button__green" : ""}
                    onClick={this.props.onChange.bind(this, 'completed')}>
                    Завершенные
                </button>
                <button 
                    className={!this.isCompleted() ? "todos__filter-button__red" : ""}
                    onClick={this.props.onChange.bind(this, 'uncompleted')}>
                    Незавершенные
                </button>
            </div>
        )
    }
}

export default FilterTodo;