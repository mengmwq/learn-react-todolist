import React, { Component } from "react";
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false,

  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })

    }

  }

  //勾选或者取消勾选的回调
  handCheck = (id) => {
    return (event) => {
      console.log(`id,event.target.value`, id, event.target.checked)
      this.props.changeTodo(id, event.target.checked)

    }

  }
  //删除
  handleDelete = (id) => {
    return () => {
      if (window.confirm("Are you sure you want to delete")) {
        this.props.deleteTodo(id)
      }
    }
  }


  render() {
    const { id, name, isDone } = this.props;
    const { mouse } = this.state;

    return (
      <li style={{ background: mouse ? 'rgb(61, 73, 71)' : '#fff' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          {/* defaultChecked默认第一次 */}
          <input type="checkbox" checked={isDone} onChange={this.handCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>

    );
  }
}
