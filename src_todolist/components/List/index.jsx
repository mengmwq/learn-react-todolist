import React, { Component } from "react";
import PropTypes from "prop-types"
import './index.css'
import Item from "../Item/index";
export default class List extends Component {
  static propTypes ={
    todos:PropTypes.array.isRequired,
    changeTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired

  }

  render() {
    
    const { todos ,changeTodo,deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return (
              <Item key={item.id} {...item}  changeTodo={changeTodo} deleteTodo={deleteTodo}/>
            )
          })
        }

      </ul>
    );
  }
}
