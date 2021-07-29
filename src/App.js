import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

import Footer from "./components/Footer";

// 创建并暴露App组件
export default class App extends Component {

  state = {
    todoList: [
      {
        id: '001',
        name: '吃饭',
        isDone: true

      },
      {
        id: '002',
        name: '睡觉',
        isDone: true

      },
      {
        id: '003',
        name: '打豆豆',
        isDone: true

      },

    ]
  }
  //用于添加一个todo  接手参数是todo对象
  addToDo = (todoObj) => {
    //获取原始数据
    const { todoList } = this.state
    const newTodoList = [todoObj, ...todoList]
    this.setState({ todoList: newTodoList })
  }
  //改变checked
  changeTodo = (id, isDone) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, isDone }

      } else {
        return todoObj
      }

    })
    this.setState({ todoList: newTodoList })

  }

  //删除
  deleteTodo = (id) => {
    const { todoList } = this.state
    const newTodoList = todoList.filter((todoObj) => {
      return todoObj.id !== id

    })
    this.setState({ todoList: newTodoList })

  }

  //全选
  handleCheckAllTodo = (isDone) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((todoObj) => {
      return { ...todoObj, isDone }

    })
    this.setState({ todoList: newTodoList })
  }

  //清除所有已经完成的

  clearAllDoneList=()=> {
    const {todoList}=this.state
    const newTodoList  = todoList.filter((todoObj)=>{
      return !todoObj.isDone 

    })
    this.setState({todoList:newTodoList})

  }
  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} />
          <List todos={todoList} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todoList} handleCheckAllTodo={this.handleCheckAllTodo} clearAllDoneList={this.clearAllDoneList} />
        </div>
      </div>
    );
  }
}