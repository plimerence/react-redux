/**
 * Created by zhangzuohua on 2017/12/15.
 */
import { combineReducers } from 'redux';
import Home from './Home';
import Detail from './Detail';

//和导航相关的reducer通过从调用出传递进来
export default function getReducers(navReducer) {
    return combineReducers({
        Home,
        Detail,
        nav: navReducer
    });
}

