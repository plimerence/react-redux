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
import  * as Actions from '../actions/Detail';

class Detail extends Component {
    static navigationOptions = {
        headerTitle:'详情'
    };
    render() {
        let {Detail,DetailActions} = this.props;
        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text>{Detail.count}</Text>
                <Text onPress={()=>{DetailActions.add()}}>add</Text>
                <Text onPress={()=>{DetailActions.remove()}}>remove</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { Detail } = state;
    return {
        Detail
    };
};

const mapDispatchToProps = (dispatch) => {
    const DetailActions = bindActionCreators(Actions, dispatch);
    return {
        DetailActions
    };
};

//让业务组件和redux建立关联
export default connect(mapStateToProps,mapDispatchToProps)(Detail);
