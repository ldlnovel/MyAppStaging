import React, { Component } from 'react';

import "./login.less";

import { connect } from 'react-redux';
import * as actions from './actions';

@connect(
	state => ({
		loginReducer: state.loginReducer,
	}),
	{
		...actions
	}
)

class index extends Component {
	constructor(props) {
		super(props);

	}
	test = () => {
		this.props.putlogin('测试成功')
	}
	render() {
		console.log( this.props)
		let { test } = this.props.loginReducer
		return (
			<div onClick={this.test} className="div">
				<p>{test}</p>
			</div>
		);
	}
}

export default index;