import { render } from '@testing-library/react'
import React from 'react'

// 子组件传递数据给父组件

// 思路：利用回调函数，父组件提供回调，子组件调用将要传递的数据作为回调函数的参数
// 1. 父组件提供一个回调函数（用于接收数据）
class Parent extends React.Component {
	state = {
		parentMsg: ''
	}
	// 提供回调函数，用于接收数据
	getChildMsg = (msg) => {
		console.log("接收到子组件数据", msg)
		// 父组件如果想要接收到子组件传递给的数据展示，用setState来取值，然后在this.state.parentMsg
		this.setState({
			parentMsg: msg
		})
	}

	render() {
		return (
			<div className='parent'>
				<h2>我是子组件传给我的参数:{this.state.parentMsg}</h2>
				父组件：<Child getMsg={this.getChildMsg} />

			</div>
		)
	}
}

// 准备一个回调函数


// 子组件
class Child extends React.Component {
	state = {
		msg: "songs"
	}
	handleClick = () => {
		// 子组件调用父组件中传递过来的回调函数
		this.props.getMsg(this.state.msg)
	}
	render() {
		return (
			<div className="child" >
				子组件：<button onClick={this.handleClick} > 点我，给父组件传递参数数据</button>
			</div >
		)
	}

}

export default Parent