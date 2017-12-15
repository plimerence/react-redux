/**
 * Created by zhangzuohua on 2017/12/15.
 */
import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import getStore from "./src/store";
import { AppNavigator } from './src/routers/routers';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};
const store = getStore(navReducer);
class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    nav: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);
export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}