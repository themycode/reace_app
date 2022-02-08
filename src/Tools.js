import React from 'react'

// 创建组件,组件引用和导入import Tools from './Utils/tool'
class Tools extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "lisi",
			age: 20,
			count: 0,
			text: '',
			content: '',
			city: '',
			isChecked: false
		}
		this.txtRef = React.createRef()
	}
	handleCanel = () => {
		this.name = "zhangsan";
		this.age = 30;
		return this.name + this.age

	}
	handleClick = (e) => {
		if (this.state.count === 0) {
			e.preventDefault()
			console.log('事件触发了！', e)
		}
	}
	handleOpen = (e) => {
		// 通过e获取事件对象,可以阻止浏览器跳转链接
		e.preventDefault()
		console.log('a标签的单击事件触发了')
	}
	// 事件绑定this指向箭头函数，修改状态必须用箭头函数
	setStateFix = () => {
		this.setState({ count: this.state.count + 1 })
	}
	// 数据变更通过e.target.value 来获取
	handleChange = e => {
		this.setState({ text: e.target.value })
	}

	handleContent = e => {
		this.setState({ content: e.target.value })
	}

	handleSelect = e => {
		this.setState({
			city: e.target.value
		})
	}
	// 复选框和其他输入框的属性不一样是e.target.checked ！！！
	handleCheck = e => {
		this.setState({
			isChecked: e.target.checked
		})
	}
	// 把几种方法修改为一种，先获取dom对象，判断target.value 是否为checkbox，因为checkbox是唯一不一样的处理方法
	handleObject = e => {
		// 获取当前dom对象
		const target = e.target
		// 根据类型获取值,若果是checkbox 就设置为checked，否则取value
		const value = target.type === 'checkbox' ? target.checked : target.value
		// 获取name
		const name = target.name
		this.setState({
			[name]: value
		})

	}
	// 非受控组件获取方式
	getTxt = () => {
		console.log("文本框的值为：", this.txtRef.current.value);
	}


	render() {
		return (
			<div>
				{/* 所有事件通过on+事件名称来触发 */}
				<button onClick={this.handleClick}>点击事件</button>
				<a href='http://www.baidu.com/' onClick={this.handleOpen}>baidu</a>
				<li>
					name:{this.state.name}
				</li>
				<li>
					age:{this.state.age}
				</li>
				<li>
					res:{this.handleCanel()}
				</li>
				<button onClick={this.setStateFix}>计数开始</button>
				<h4>{this.state.count}</h4>
				{/* 文本框 */}
				<input type='text' name="text" value={this.state.text} onChange={this.handleObject} />
				{/* 富文本框 */}
				<textarea name="content" value={this.state.content} onChange={this.handleObject} />
				{/* 下拉选择 */}
				<select name="city" value={this.state.city} onChange={this.handleObject}>
					<option value="sh">上海</option>
					<option value="bj">北京</option>
					<option value="gz">广州</option>
				</select>
				{/* 勾选 */}
				<input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleObject} />

				{/* 非受控组件创建方式 */}
				<input type="text" ref={this.txtRef} />
				<button onClick={this.getTxt}>获取文本框的值</button>
			</div>
		)
	}

}
export default Tools;