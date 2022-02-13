// 跨组件传递使用 Context
import React from "react";
import reactDom from "react-dom";

// 调用React.createContext() 创建 Provider（提供数据）和
// Consumer(消费数据)两个组件
const { Provider, Consumer } = React.createContext()


class App extends React.Component {
	render() {
		return (
			<Provider value="pink">
				<div className="app">
					<h1>此处展示props的默认值：{this.props.pageSize}</h1>
					<Node />
				</div>
			</Provider>
		)
	}
}

// 可以给组件设置默认值,例如页面展示的默认值
App.defaultProps = {
	pageSize: 10
}


const Node = props => {
	return (
		<div className="node"><SubNode /></div>
	)
}

const SubNode = (props) => {
	return (
		<div className="SubNode"><Child /></div>
	)
}

const Child = (props) => {
	return (
		<div className="Child">
			<Consumer>
				{
					data => <span>我是子节点-- {data}</span>
				}
			</Consumer>
			<h2>我是超级子组件</h2>
		</div>
	)
}

reactDom.render(<App />, document.getElementById('root'))

export default App;