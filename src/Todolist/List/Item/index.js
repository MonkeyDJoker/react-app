import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { flag: false }

    touch = (flag) => {
        return () => {
            this.setState({ flag: flag })
        }
    }

    getCheck = (id) => {
        return (event) => {
            this.props.changeCheck(id, event.target.checked)
        }
    }

    deleteDiv = (id)=>{
        return ()=>{
            if(window.confirm('Are you sure to delete this task?'))
                 this.props.deleteTask(id)
            
        }
    }

    render() {
        return (
            <div className='inputDiv' onMouseEnter={this.touch(true)} onMouseLeave={this.touch(false)} style={{ backgroundColor: this.state.flag ? '#bfa' : '' }}>
                <input type={'checkbox'} checked={this.props.check} onChange={this.getCheck(this.props.id)}></input>
                <span>{this.props.task}</span>
                <button className='inputButton' style={{ display: this.state.flag ? '' : 'none' }}  onClick={this.deleteDiv(this.props.id)} >Delete</button>
            </div>
        )
    }
}
