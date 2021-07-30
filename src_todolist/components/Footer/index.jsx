import React, { Component } from "react";
import './index.css'
export default class Footer extends Component {
 //全选(
  handleCheckAll=(event)=>{
    this.props.handleCheckAllTodo(event.target.checked)

  }
  //清除已经完成的
  handleDeleteDone=(event)=>{ 
    this.props.clearAllDoneList()

  }
  render() {
    const { todos } = this.props;
    //已完成个数，总数 reduce条件求和统计

    const doneCount = todos.reduce((per, current) => {
      return per + (current.isDone ? 1 : 0)

    }, 0)
   
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"  checked={doneCount == total&&total!==0? true: false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteDone}>清除已完成任务</button>
      </div>
    );
  }
}
