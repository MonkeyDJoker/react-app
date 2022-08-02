import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import List from './List'
import './index.css'

export default class Todolist extends Component {

    state = {
        todos: [
            { id: '001', task: 'VolkSwagen', check: true },
            { id: '002', task: 'BMW', check: true },
            { id: '003', task: 'Ford', check: false },
            { id: '004', task: 'Suzuki', check: true },
        ]

    }

    addTask = (taskobj) => {
        const { todos } = this.state
        const newTask = [taskobj, ...todos]
        this.setState({ todos: newTask })
    }

    changeCheck = (id, data) => {
        const { todos } = this.state
        const newTask = todos.map(
            (todo) => {
                if (todo.id === id)
                    return { ...todo, check: data }
                else
                    return { ...todo }
            }
        )
        this.setState({ todos: newTask })
    }

    deleteTask = (id)=>{
        const {todos} = this.state
        const newTask = todos.filter(
            (todo)=>{
                return todo.id !== id
            }
        )
        this.setState({todos:newTask})
    }

    totalCheck = (data) =>{
        const {todos} = this.state
        const newTask = todos.map(
            (todo)=>{
                if(data === true)
                    return {...todo,check:true}
                else
                    return {...todo,check:false}
            }
        )
        this.setState({todos:newTask})
    }

    render() {
        return (
            <div className='todolist'>
                <Header addTask={this.addTask} />
                <List todos={this.state.todos} changeCheck={this.changeCheck} deleteTask={this.deleteTask} />
                <Footer todos={this.state.todos} totalCheck={this.totalCheck} />
            </div>
        )
    }
}
