/**
 * Created by zhangzuohua on 2017/12/15.
 */
import {
    TabNavigator,
    StackNavigator,
    addNavigationHelpers
} from "react-navigation";

import Home from '../components/Home';
import Detail from '../components/Detail';

const AppNavigator = StackNavigator({
    Home: {screen: Home},
    Detail: {screen: Detail}
},{initialRouteName: 'Home'});

export {
    AppNavigator
};