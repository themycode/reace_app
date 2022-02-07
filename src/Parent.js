import React from 'react'
import ReactDom from 'react-dom'

// 父组件传递参数给子组件 类组件
// 1. 父组件提供一个state数据
// 2. 给子组件标签添加属性，值为state中的数据
// 3. 子组件中通过props接收父组件中传递的数据
class Parent extends React.Component {
	state = {
		// 父组件定义数据
		lastName: "laowang"
	}


	render() {
		return (
			<div className='parent'>
				父组件:
				{/* 传递给子组件数据 */}
				<Child name={this.state.lastName} />
			</div>
		)
	}
}

// 子组件  函数组件通过props来接收父组件传过来的数据
const Child = (props) => {
	console.log("子组件：", props)
	return (
		<div className='child'>
			<p>子组件，接收到父组件的数据：{props.name}</p>
		</div>
	)
}

ReactDom.render(<Parent />, document.getElementById("root"))

export default Parent;