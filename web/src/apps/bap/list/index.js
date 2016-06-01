import React from 'react'
import Toolbar from './component/toolbarComponent'
import {List} from 'immutable'

export default class ListComponent extends React.Component{
	constructor(props){
		super(props)
		this.getData = this.getData.bind(this)
		this.getFunctions = this.getFunctions.bind(this)
	}

	componentWillMount(){
	}

	componentDidMount(){
		this.props.getFunctions()
		if(this.props.appPath === 'apps/bap/list'){
			this.props.getData(this.props.appParams.sysId,this.props.appParams.mId)
		}
	}
	getFunctions(){
		return this.props.payload.get('functions') || List()
	}
	getData(){
		return this.props.payload.get('data') || List()
	}

	render(){
		return (
			<div style={{padding:10,  background: '#ccc'}}>
				<Toolbar ref='toolbar' payload={this.getFunctions()} ></Toolbar>
				{this.getData().map(value=><div key={value.get('id')}>{value.get('id')}-{value.get('name')} </div>)}
				
			</div>
		)
	}
}