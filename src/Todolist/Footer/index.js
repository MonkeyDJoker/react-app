import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


  allCheck = (event) => {


    this.props.totalCheck(event.target.checked)
  }

  render() {

    const {todos} = this.props
    const total = todos.length
    const finished = todos.reduce(
      (pre,current)=>{
        return pre + (current.check?1:0)
      },(0)
    )


    return (
      <div className='todolistfooter'>
        <input type={"checkbox"} checked={total===finished && total !==0} onChange={this.allCheck}></input>
        <span>Finished {finished} /Total {total} </span>
        <button>Delete Finished Tasks</button>
      </div>
    )
  }
}
