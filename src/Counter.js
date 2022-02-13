// 兄弟组件通讯
import React from "react";
import ReactDom from "react-dom";

class Counter extends React.Component {
	// 提供共享数据
	state = {
		count: 0
	}

	// 提供修改状态的方法
	onIncrement = () => {
		// 推荐的写法 
		this.setState((state, props) => {
			return {
				count: state.count + 1
			}
		}, () => {
			console.log("状态更新完成", this.state.count)
		})
		// this.setState({
		// 	count: this.setState.count + 1
		// })
	}

	render() {
		return (
			<div>
				<p>测试一下router</p>
				<Child1 count={this.state.count} />
				<Child2 onIncrement={this.onIncrement} />
			</div>
		)
	}
}

const Child1 = (props) => {
	return <h1>计数器：{props.count}</h1>
}

const Child2 = (props) => {
	return <button onClick={() => props.onIncrement()}>+1</button>
}

ReactDom.render(<Counter />, document.getElementById('root'))

export default Counter