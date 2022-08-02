import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './index.css'

export default class List extends Component {


  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeCheck: PropTypes.func.isRequired
  }

  render() {
    const { todos, changeCheck , deleteTask} = this.props
    return (
      <div className='todolistlist'>
        {
          todos.map((todo) => {
            return <Item {...todo} key={todo.id} changeCheck={changeCheck} deleteTask={deleteTask} />
          })
        }
      </div>
    )
  }
}
