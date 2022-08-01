import React, { Component } from 'react'
import './index.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

export default class Header extends Component {

  static propTypes = {
    addTask:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    if (event.code !== 'Enter') {
      return
    }
    const taskobj = { id: nanoid(), task: event.target.value, check: false }
    if (event.target.value.trim() === '') {
      alert('Please Enter a Task!')
      return
    }
    this.props.addTask(taskobj)

    event.target.value = ''

  }


  render() {
    return (
      <input onKeyUp={this.handleKeyUp} className='todolistheader' placeholder='Please enter your task name!' ></input>
    )
  }
}
