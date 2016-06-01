import React from 'react'
import style from "../../styles/navbar/miniButton.less"

export default class MiniButtonComponent extends React.Component{

	render(){
		return(
			<li className="navbar-todo" title={this.props.title}>
			<a href="#" className="a" data-toggle="dropdown">
					<span className="badge" style={{'backgroundPositionX':this.props['background-position-x']}}></span>
					<span className="circleNum"></span>
				</a>
				<div className="popover bottom"></div>
			</li>
		)
	}
}

