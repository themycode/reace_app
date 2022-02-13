import React from 'react'
import ReactDom from 'react-dom'

// props组件的使用
// 特点：1. 可以给组件传递任意类型的数据，函数、标签、数值等等；2. props是 只读的对象，只能读取属性的值，无法修改对象
class PropsDemo extends React.Component {
	// 类中通过constructor来接收props，推荐使用
	constructor(props) {
		super(props)
		console.log("props:", this.props)

	}
	render() {
		console.log("render:", this.props.fun)
		return (
			<div>
				<h1 style={{ color: "red", backgroundColor: "skyblue" }} >props:{this.props.colorize[1]}</h1>
				<h2>{this.props.tar}</h2>
				{this.props.tar}
			</div >
		)
	}
}



// 传各种数据
ReactDom.render(
	<PropsDemo
		name="hello"
		age={20}
		tar={<p>这是一个p标签</p>}
		fun={() => {
			console.log('这是一个函数！')
		}}
		colorize={['red', 'green', 'blue']}
	/>,
	document.getElementById('root')
)

export default PropsDemo