import React, { Component } from 'react';
//用于获取redux中保存的状态
import store from '../../redux/store'
//引入action
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value*1))

  }
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>

      </div>
    );
  }
}
