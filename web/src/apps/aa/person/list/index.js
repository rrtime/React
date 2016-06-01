import React from 'react'
import List from '../../../bap/list/index'

export default class PersonListComponent extends List{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		super.componentDidMount()
		this.props.getPersons()
	}

	render(){
		return super.render()
	}
	
}