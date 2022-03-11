import React, { Component } from 'react';
import Axios from 'axios';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

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
        const description = this.state.description;
        Axios.post(URL, { description })
            .then(resp => console.log('Funcionou! '))
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