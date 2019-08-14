import React, { Component } from 'react'
import "./todo_header.scss"

class TodoInput extends Component {
    state = {
        new_todo: ""
    }

    onChange = (e) =>{
        this.setState({ new_todo: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.new_todo);
        this.setState({ new_todo: "" })
    }

    render(){
        return (
            <div className="todos-header">
                <div className="todos-header__title">
                    Todos
                </div>
                <div className="todos-header__input">
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Введите данные"
                            value={this.state.new_todo}
                            onChange={this.onChange}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoInput;