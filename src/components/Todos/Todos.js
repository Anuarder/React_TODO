import "./todos.scss"
import React, { Component } from 'react'
import TodoItem from "../TodoItem/TodoItem"

class Todos extends Component{
    state = {
        new_todo: "",
        id_count: 0,
        todos: []
    }

    handleTodoComplete = (id) => {
        this.setState({ 
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        });
    }
    handleTodoDelete = (id) => {
        this.setState(state => {
            const todos = state.todos.filter(el => el.id !== id);
            return {
                todos
            }
        });
    }

    handleAddTodoSubmit = (e) => {
        e.preventDefault();
        this.setState(state => {
            const todos = [...state.todos, {
                    id: state.id_count,
                    title: state.new_todo,
                    isCompleted: false,
                    isEdit: false
                }
            ];
            state.id_count += 1
            return{
                todos,
                new_todo: ''
            }
        });
    }

    handleEditTodo = (id) => {
        this.setState({ 
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.isEdit = !todo.isEdit;
                }
                return todo;
            })
        });
        console.log(id)
    }

    handleNewTodoChange = (e) => {
        this.setState({ new_todo: e.target.value.toUpperCase() });
    }
    
    handleEditTitle = (e) => {
        // Todo: редактирование
        console.log(e);
    }

    render(){
        return(
            <div className="todos-component">
                <div className="todos">
                    <div className="todos__header">
                        <div className="todos__title">
                            Todos
                        </div>
                        <div className="todos__input">
                            <form onSubmit={this.handleAddTodoSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Введите данные"
                                    value={this.state.new_todo}
                                    onChange={this.handleNewTodoChange}/>
                            </form>
                        </div>
                    </div>
                    <div className="todos__list">
                        {
                            this.state.todos.map((todo, i) => (
                                <TodoItem 
                                    todo={todo} 
                                    key={todo.id} 
                                    todoComplete={this.handleTodoComplete}
                                    deleteTodo={this.handleTodoDelete}
                                    editTodo={this.handleEditTodo}
                                    editTitle={this.handleEditTitle}/>
                            ))
                        }
                    </div>
                </div> 
            </div>
        )
    }
}

export default Todos;