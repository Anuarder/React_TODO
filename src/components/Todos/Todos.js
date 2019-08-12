import "./todos.scss"
import React, { Component } from 'react'
import TodoItem from "../TodoItem/TodoItem"
import FilterTodo from "../FilterTodo/FilterTodo"
import Pagination from "../Pagination/Pagination"

class Todos extends Component{
    // data
    state = {
        new_todo: "",
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
        currentPage: 1
    }


    //methods
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
        if(this.state.new_todo === ""){
            alert("Пустое значение")
        }else{
            this.setState(state => {
                const todos = [{
                        id: state.id_count,
                        title: state.new_todo,
                        isCompleted: false,
                        isEdit: false
                    },
                    ...state.todos 
                ];
                state.id_count += 1
                return{
                    todos,
                    new_todo: ''
                }
            });
        }
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
    }

    handleNewTodoChange = (e) => {
        this.setState({ new_todo: e.target.value });
    }
    
    handleEditTitle = (id, e) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                // Передаваемое значение идет первым, e последним
                // Реакт обновляет значение input
                if(todo.id === id){
                    todo.title = e.target.value;
                }
                return todo;
            })
        });
    }
    
    handleEndEdit = (id, e) => {
        if(e.key === "Enter"){
            this.handleEditTodo(id);
        }
    }

    handleFilterChange = (value) => {
        this.setState({filter: value});
    }
    handlePaginate = (value) => {
        this.setState({currentPage: value})
    }
    //template
    render(){
        const { todos, currentPage, todosPerPage, filter } = this.state;
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
                    <FilterTodo 
                        filter={filter}
                        onChange={this.handleFilterChange}/>
                    <div className="todos__list">
                        {
                            currentTodos.map((todo, i) => (
                                <TodoItem 
                                    todo={todo} 
                                    key={todo.id} 
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