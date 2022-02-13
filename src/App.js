import logo from './logo.svg';
import './App.css';
import React from 'react'
// 导入图片资源
import img from "./imgs/logo.png"
import PropTypes from 'prop-types'


// 高阶组件用法 render props模式  
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <Mouse render={(mouse) => {
          return <p>鼠标位置：{mouse.x} {mouse.y}</p>
        }} /> */}
        {/* <Mouse render={(mouse) => {
          return <img src={img} alt="cat" style={{
            position: 'absolute',
            top: mouse.y - 96,
            left: mouse.x - 96
          }} />
        }} /> */}

        {/* 另一种方式使用child props 推荐的方法 */}
        {/* <Mouse>
          {
            mouse => {
              return <p>鼠标位置：{mouse.x} {mouse.y}</p>
            }
          }
        </Mouse> */}
        {/* 高阶组件调用 */}
        <h2>高阶组件用法</h2>
        {/* 高阶组件传递属性,高阶函数中要返回...this.props,否则接收不到hello属性 */}
        <MousePosition hello="hello"></MousePosition>
        <MouseCat></MouseCat>
      </div>
    );
  }

}
// 高阶组件用法
// class Mouse extends React.Component {
//   // 鼠标位置state
//   state = {
//     x: 0,
//     y: 0
//   }

//   // 鼠标移动事件处理程序
//   handleMouseMove = e => {
//     this.setState({
//       x: e.clientX,
//       y: e.clientY
//     })
//   }
//   // 监听鼠标移动事件
//   componentDidMount() {
//     window.addEventListener('mousemove', this.handleMouseMove)
//   }
//   // 推荐：在组件卸载时移除事件绑定
//   componentWillUnmount() {
//     window.removeEventListener('mousemove', this.handleMouseMove)
//   }
//   render() {
//     // return this.props.render(this.state)
//     // children props方式
//     return this.props.children(this.state)
//   }
// }
// Mouse.propTypes = {
//   children: PropTypes.func.isRequired
// }

// 创建高阶组件 with开头 Wrapped 大写开头
function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    // 鼠标状态
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 控制鼠标状态的逻辑
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
    // 高阶组件要传递props ,包装组件不会丢失props中传递的参数
    render() {
      return <WrappedComponent {...this.state}{...this.props}></WrappedComponent>
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

// 高级组件区分组件名字 设置displayName
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
// 用来测试高阶组件
const Position = props => (
  <p>鼠标当前位置：(x:{props.x}, y:{props.y})</p>
)

const Cat = props => (
  <img src={img} alt='' style={{
    position: 'absolute',
    top: props.y,
    left: props.x
  }} />
)
// 调用增强后的组件
const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)
export default App;
