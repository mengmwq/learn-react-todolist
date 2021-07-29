import React, { Component } from 'react';
import PropTypes from "prop-types";

import { nanoid } from 'nanoid';
import './index.css'

export default class Header extends Component {
  static propTypes ={
    addToDo:PropTypes.func.isRequired

  }
  //键盘事件回车回调
  handleKeyUp = (event) => {
    const { target, keyCode } = event
    //判断是否是回车
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    //准备好一个todo对象
    const todoObj = {
      id: nanoid(),
      name: target.value,
      isDone: false,
    }
    //todoObj传递给app
    this.props.addToDo(todoObj)
    // 清楚内容
    target.value = ''


  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
