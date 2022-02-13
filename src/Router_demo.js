import React from 'react'
import ReactDOM from 'react-dom'
//1. 导入路由组件

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
class First extends React.Component {
	render() {
		return <h1>我是first页面</h1>
	}
}

class Two extends React.Component {
	render() {
		return <h2>我是two页面</h2>
	}
}


const RouterDemo = () => (
	<Router>
		<ul>
			<li><Link to='/first'>first</Link></li>
			<li><Link to='/two'>Two</Link></li>
		</ul>
		<Routes>
			<Route path="/first" element={<First />} />
			<Route path='/two' element={<Two />} />
		</Routes>
	</Router>
	// ReactDOM.render(<RouterDemo />, document.getElementById('root'))
);

export default RouterDemo;