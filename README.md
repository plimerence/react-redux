## react-redux
#一些React-redux的理解
下面是两篇参考的文章，关于react-redux
[react-redux docs](https://github.com/reactjs/react-redux/blob/master/docs/api.md)
[connect.js实现](https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e)
react-redux的核心我感觉就是connect函数，
connect函数大致实现是这个样子
```function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      handleChange() {
        this.forceUpdate()
      }
    }
  }
}```
从这个函数`connect(mapStateToProps,mapDispatchToProps)(WrappedComponent)`可以看出  connect函数接收的mapStateToProps,mapDispatchToProps参数在组件内部被调用,然后mapStateToProps就是选出自己关心的state然后进行订阅操作，
当自己关心的state发生变化时，强制刷新UI，mapStateToProps,mapDispatchToProps处理过后的会跟props合并。

#关于store
我关于store的理解，store最初就是存放的reducers里面的initialState,这是一个全局的大State,但是组件不需要这么多State，
所以就有了mapStateToProps,来筛选出自己关注的state,并且对自己关注的State进行订阅,mapDispatchToProps就是有很多actions，
我通过里面的actions来操作State,假如有Login ,register页面，他们分别对应自己的State，也有自己对应的actions,
假如register想更改Login的state,那就要用Login的actions方法来改变对应的State，
如果app很大 很复杂 那么state会特别庞大，这时候如何设计state就会特别重要，此时设计state无异于设计一次数据库。

###上面写个一个小demo 集成react-redux,react-navigation, 上面简单的集成了一下，简单些了两个页面，欢迎讨论


