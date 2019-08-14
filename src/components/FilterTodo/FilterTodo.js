import React from 'react'
import "./filter_todo.scss"

const FilterTodo = ({onClick, filter}) => {
    const isCompleted = () => {
        return filter === "completed"
    }
    return (
        <div className="todos__filter">
            <button 
                className={isCompleted() ? "todos__filter-button__green" : ""}
                onClick={() => onClick('completed')}>
                Завершенные
            </button>
            <button 
                className={!isCompleted() ? "todos__filter-button__red" : ""}
                onClick={() => onClick('uncompleted')}>
                Незавершенные
            </button>
        </div>
    )
}

export default FilterTodo;