import { INCREMENT,DECREMENT} from '../redux/constant'
const initState = 0
export default function CountReducer(preState=initState, action) {
    //从action对象中获取 type  data
    // if (preState == undefined) preState = 0

    const { type, data } = action;
    switch (type) {
        case INCREMENT: //如果是加
            return preState + data;
        case DECREMENT: //如果是减
            return preState - data;
        default: //
            return preState
    }
}