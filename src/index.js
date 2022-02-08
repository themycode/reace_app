import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Tools from './Utils/tool'
import PropsDemo from './Utils/propsdemo'

const name = "Jack";
const isLoading = true;
const loadData = () => {
  // if (isLoading) {
  //   return <div>loading...</div>
  // }
  // return <div>加载完成！</div>
  // 三元表达式
  return isLoading ? (<div>loading...</div>) : (<div>加载完成!</div>)
}

// react 组件可以用函数和类两种方式创建组件，组件可以复用
// 使用函数创建组件的方式 函数名必须大写
// function Hello() {
//   return <div>这是一个函数组件</div>
// }

// 第二种方式通过类方式创建组件，类名需要大写，并且继承React.Component父类，从而可以使用父类中提供的方法和属性
// 类组件必须提供render()方法
// render() 方法必须有返回值，表示该组件的结构
// 组件中引用使用<Tool/> ,jsx中引用使用{Tool()}
class HelloWorld extends React.Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    return (<div>Hello Class Component,这是我的第一个类组件!
      <Tools />
      {/* 如果要传递每个调用的地方都要传递值 */}
      <PropsDemo name="hello"
        age={20}
        tar={<p>这是一个p标签</p>}
        fun={() => {
          console.log('这是一个函数！')
        }}
        colorize={['red', 'green', 'blue']} />
    </div>)
  }

}

// const Hello = () => <div>这是一个箭头函数返回值！！！</div>
const songs = [
  { id: 1, name: "绝对值" },
  { id: 2, name: "南山" },
  { id: 3, name: "天涯" }
]

const title = (
  <div>
    <h2 className='title'>
      Hello,我叫:
      {/* jsx中使用{}花括号来接收js的值 */}
      <span>{name}</span>
    </h2>
    <h3>条件渲染</h3>
    {loadData()}
    <ul className='list'>
      {/* 列表渲染 */}
      {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
    {/* {Hello()} */}
    {/* {HelloWorld()} */}
  </div>)
// const title = React.createElement('h1', null, "hello react!!!")

// ReactDom.render(<Hello />, document.getElementById('root'))
// ReactDom.render(title, document.getElementById('root'))
ReactDom.render(<HelloWorld />, document.getElementById('root'))
// ReactDom.render(<Tools />, document.getElementById('root'))