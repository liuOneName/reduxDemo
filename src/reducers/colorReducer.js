import { CHANGE_COLOR } from '../actions/colorAction';

const initState = {
    color: 'red',
    string: [],
}

export default function (state = initState, action = {}){
    switch(action.type){
        case CHANGE_COLOR: {
            return {//返回值导致 打印的state 数据结构有所改变
                ...state,
                color: action.color
            }
        }
        default: return state;
    }
}