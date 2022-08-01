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
            { id: '003', task: 'Ford', check: true },
            { id: '004', task: 'Suzuki', check: true },
        ]

    }

    addTask = (taskobj) => {
        const { todos } = this.state
        const newTasks = [taskobj, ...todos]
        this.setState({ todos: newTasks })
    }

    changeCheck = (id, data) => {
        const {todos} =this.state
        const newTask = todos.map(
            (todo) => {
                if(todo.id === id) 
                    return {...todo,check:data}
                else 
                    return {...todo}
            }
        )
        this.setState({todos:newTask})

    }

    render() {
        return (
            <div className='todolist'>
                <Header addTask={this.addTask} />
                <List todos={this.state.todos} changeCheck={this.changeCheck} />
                <Footer />
            </div>
        )
    }
}
