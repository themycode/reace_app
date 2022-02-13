// react生命周期
import React from "react";


class ReactDemo extends React.Component {
	// 先执行constructor 创建组件时，最先执行
	// 初始化state，为事件处理程序绑定this
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
		console.warn("生命周期钩子函数：coustructor")
	}

	// 只有渲染后在dom操作componentDidMount中可以拿到render的id
	// 发送ajax请求，获取远程数据
	componentDidMount() {
		const title = document.getElementById("title")

		console.log(title)
		console.warn("声明周期钩子函数：componentDidMount")
	}

	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	// 在执行每次组件渲染都会被触发，渲染ui，不能setState
	render() {
		console.warn("生命周期钩子函数：render")
		return (
			<div>
				{
					this.state.count > 3 ? (<p>豆豆打死了</p>) : (
						<Counter count={this.state.count} />
					)
				}
				{/* <Counter count={this.state.count} /> */}
				<button id="btn" onClick={this.handleClick}>打豆豆</button>
			</div>
		)
	}
}

class Counter extends React.Component {
	componentDidMount() {
		// 开启定时器
		this.timerId = setInterval(() => {
			console.log("定时器正在执行~")
		}, 500)
	}
	render() {
		return <h1 id="title">统计豆豆被打的次数：{this.props.count}</h1>
	}
	// render先执行，组件更新完后，在执行componentDidUpdate
	// 如果要调用setState(),必须要放在一个if条件中
	componentDidUpdate(prevProps) {
		console.warn("--子组件--生命周期钩子函数：componentDidUpdate")
		// 演示获取dom操作
		const title = document.getElementById("title")
		console.log("title", title.innerText)
		// 比较更新前后的props是否相同，来决定是否重新渲染组件
		console.log("上一次props", prevProps, ",当前的props", this.props)
		if (prevProps.count !== this.props.count) {
			this.setState({})
		}
	}

	componentWillUnmount() {
		console.log("卸载钩子函数触发：componentWillUnmount")
		clearInterval(this.timerId)
	}
}
export default ReactDemo