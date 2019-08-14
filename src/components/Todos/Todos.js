import "./todos.scss"
import React, { Component } from 'react'
import TodoItem from "../TodoItem/TodoItem"
import FilterTodo from "../FilterTodo/FilterTodo"
import Pagination from "../Pagination/Pagination"
import TodoHeader from "../TodoHeader/TodoHeader"

class Todos extends Component{
    state = {
        id_count: 1,
        todos: [
            {
                id: 0,
                title: "Example todo",
                isCompleted: false,
                isEdit: false
            }
        ],
        filter: "uncompleted",
        filterTodo: [],
        todosPerPage: 7,
        currentPage: 1,
        currentEditTodo: ""
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

    handleAddTodoSubmit = (value) => {
        if(value === ""){
            alert("Пустое значение")
        }else{
            this.setState(state => {
                const todos = [{
                        id: state.id_count,
                        title: value,
                        isCompleted: false,
                        isEdit: false
                    },
                    ...state.todos 
                ];
                state.id_count += 1
                return{
                    todos
                }
            });
        }
    }

    handleEditTodo = (id) => {
        // REFACTORING
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.isEdit = !todo.isEdit;
                }
                return todo;
            }),
            currentEditTodo: this.state.todos.map(todo => {
                let todoTitle = ""
                if(todo.id === id){
                    todoTitle = todo.title
                }
                return todoTitle;
            })
        });
    }
    
    handleEditTitle = (value) => {
        this.setState({currentEditTodo: value});
    }
    
    editTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.title = this.state.currentEditTodo;
                    todo.isEdit = false;
                }
                return todo;
            }),
        })
    }
    
    cancelTodoEdit = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.isEdit = false;
                }
                return todo;
            }),
        })
    }

    handleEndEdit = (id, key) => {
        if(key === "Enter"){
            this.editTodo(id);
        } else if(key === "Escape"){
            this.cancelTodoEdit(id);
        }
    }

    handleFilterChange = (value) => {
        this.setState({filter: value});
    }

    handlePaginate = (value) => {
        this.setState({currentPage: value})
    }

    render(){
        const { todos, currentPage, todosPerPage, filter, currentEditTodo } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirsTodo = indexOfLastTodo  - todosPerPage;
        const filterTodo = todos.filter(el => {
                if(filter === "completed"){
                    return el.isCompleted === true
                }else {
                    return el.isCompleted === false
                }
            });
        const currentTodos = filterTodo.slice(indexOfFirsTodo, indexOfLastTodo);
        
        return(
            <div className="todos-component">
                <div className="todos">
                    <TodoHeader
                        onSubmit={this.handleAddTodoSubmit}/>
                    <FilterTodo 
                        filter={filter}
                        onClick={this.handleFilterChange}/>
                    <div className="todos__list">
                        {
                            currentTodos.map((todo, i) => (
                                <TodoItem 
                                    todo={todo} 
                                    key={todo.id} 
                                    currentEditTodo={currentEditTodo}
                                    todoComplete={this.handleTodoComplete}
                                    deleteTodo={this.handleTodoDelete}
                                    editTodo={this.handleEditTodo}
                                    editTitle={this.handleEditTitle}
                                    endEdit={this.handleEndEdit}/>
                            ))
                        }
                    </div>
                    <Pagination 
                        totalData = {todos.length}
                        dataPerPage={todosPerPage}
                        paginate={this.handlePaginate}
                        currentPage={currentPage}/>
                </div> 
            </div>
        )
    }
}

export default Todos;