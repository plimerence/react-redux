/**
 * Created by zhangzuohua on 2017/12/15.
 */
import {createStore} from 'redux'
import getReducers from '../reducers'


export  default function getStore(navReducer) {
    return createStore( getReducers(navReducer))
}