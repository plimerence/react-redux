/**
 * Created by zhangzuohua on 2017/12/15.
 */
import ActionTypes from '../actions/ActionTypes'

const initialState = {count : 0};



export default function Home(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.HOME_ADD:
            return {...state, count:state.count + 1}
        case ActionTypes.HOME_REMOVE:
            return {...state, count:state.count - 1}
        default:
            return state;
    }
}
