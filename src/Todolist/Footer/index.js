import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='todolistfooter'>
        <input type={"checkbox"} ></input>
        <span>Finished/Total</span>
        <button>Delete Finished Tasks</button>
      </div>
    )
  }
}
