/**
 * Created by zhangzuohua on 2017/12/15.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as HomeActions from '../actions/Home';
import * as detailActions from '../actions/Detail';

class Home extends Component {
    static navigationOptions = {
        headerTitle:'主页'
    };
    render() {
        let {Home,homeActions,navigation,DetailActions} = this.props;
       console.log('XXX',this.props);
        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>{Home.count}</Text>
                <Text onPress={()=>{homeActions.add()}}>add</Text>
                <Text onPress={()=>{homeActions.remove()}}>remove</Text>
                <Text onPress={()=>{navigation.navigate('Detail')}} style={{color:'#CD5C5C'}}>navigate to Detail</Text>
                <Text onPress={()=>{DetailActions.add()}} style={{color:'#8470FF'}}>chage Detail State</Text>

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { Home } = state;
    return {
        Home
    };
};

const mapDispatchToProps = (dispatch) => {
    const homeActions = bindActionCreators(HomeActions, dispatch);
    const DetailActions = bindActionCreators(detailActions, dispatch);

    return {
        homeActions,
        DetailActions
    };
};

//让业务组件和redux建立关联
export default connect(mapStateToProps,mapDispatchToProps)(Home);
