import "./todos.scss"
import React, { Component } from 'react'
import TodoItem from "../TodoItem/TodoItem"

class Todos extends Component{
    state = {
        todos: [
            {
                id: 0,
                title: "Проверить дом",
                isCompleted: false
            },
            {
                id: 1,
                title: "Убрать за котом",
                isCompleted: false
            },
            {
                id: 2,
                title: "Починить машину",
                isCompleted: false
            },
        ]
    }
    addTodo(e){
        e.preventDefault();
        console.log("hop")
    }
    
    todoComplete = (id) =>{
        this.setState({ 
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        });
    }

    render(){
        return(
            <div className="todos-component">
                <div className="todos">
                    <div className="todos__header">
                        Todos
                    </div>
                    <div className="todos__input">
                        <form onSubmit={this.addTodo}>
                            <input 
                                type="text" 
                                placeholder="Введите данные"/>
                        </form>
                    </div>
                    <div className="todos__list">
                        {
                            this.state.todos.map((todo, i) => (
                                <div 
                                    className="todos__item" 
                                    key={todo.id}>
                                    <TodoItem todo={todo} todoComplete={this.todoComplete}/>
                                </div>
                            ))
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Todos;