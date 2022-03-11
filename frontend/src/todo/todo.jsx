import React, { Component } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            list: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    } 

    handleAdd() {
        console.log(this.state.description)
    }
    
    render() {
        return (
            <div>
                <PageHeader 
                    name={'Tarefas'}
                    small={'Cadastro'}
                />
                <TodoForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description} 
                />
                <TodoList />
            </div>
        );
    }
}