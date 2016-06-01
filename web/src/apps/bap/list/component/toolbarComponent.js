import React from 'react'
import ToolbarItem from './toolbarItemComponent'

export default class ToolbarComponent extends React.Component{
	render(){
		return (
			<div>{this.props.payload.map(value=><ToolbarItem  key={value} payload={value}  onClick={this.props.onToolbarClick} />)}</div>
		)
	}
}