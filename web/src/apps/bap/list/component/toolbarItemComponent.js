import React from 'react'

export default class ToolbarComponent extends React.Component{
	 constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
		setTimeout(()=> this.props.onClick( this.props.payload.get('code'), this.props.payload.get('name') ),0)
    }

	render(){
		return (
			<input type='button' value={this.props.payload.get("name")} onClick={this.handleClick} />
		)
	}
}