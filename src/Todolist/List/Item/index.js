import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {flag:false}

    touch = (flag)=>{
        return ()=>{
            this.setState({flag:flag})
        }
    }

    getCheck = (id)=>{
        return (event)=>{
            this.props.changeCheck(id,event.target.checked)
        }
    }

    render() {
        return (
            <div className='inputDiv' onMouseEnter={this.touch(true)} onMouseLeave={this.touch(false)} style={{backgroundColor:this.state.flag?'#bfa':''}}>
                    <input type={'checkbox'} defaultChecked={this.props.check} onChange={this.getCheck(this.props.id)}></input>
                    <span>{this.props.task}</span>
                    <button className='inputButton' style={{display:this.state.flag?'':'none'}} >Delete</button>
            </div>
        )
    }
}
