import React from 'react'
import "./filter_todo.scss"

const FilterTodo = ({onChange, filter}) => {
    const isCompleted = () => {
        return filter === "completed"
    }
    return (
        <div className="todos__filter">
            <button 
                className={isCompleted() ? "todos__filter-button__green" : ""}
                onClick={onChange.bind(this, 'completed')}>
                Завершенные
            </button>
            <button 
                className={!isCompleted() ? "todos__filter-button__red" : ""}
                onClick={onChange.bind(this, 'uncompleted')}>
                Незавершенные
            </button>
        </div>
    )
}

export default FilterTodo;