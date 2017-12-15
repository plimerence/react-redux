/**
 * Created by zhangzuohua on 2017/12/15.
 */
import ActionTypes from './ActionTypes'

export function add() {
    return {
        type:ActionTypes.HOME_ADD
    }
}

export function remove() {
    return {
        type:ActionTypes.HOME_REMOVE
    }
}