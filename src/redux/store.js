import {createStore} from 'redux'

//引入count组件服务的reducer
import CountReducer from './count_reducers'

export default createStore(CountReducer)