import React, { Component } from 'react';
import Axios from 'axios';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] }

        this.state = {
            description: '',
            list: []
        }

        this.refresh();

        this.handleSearch = this.handleSearch.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    refresh(description = '') {
        const search = description 
            ? `&description__regex=/${description}/`
            : '';

        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state,
                description,
                list: resp.data
            }))
    }

    handleSearch() {
        this.refresh(this.state.description);
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
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description));
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
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    description={this.state.description} 
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        );
    }
}