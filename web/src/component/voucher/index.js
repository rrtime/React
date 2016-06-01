import React,{Component} from 'react'
import { Form, Tabs} from 'antd'
import Immutable, {Map,List} from 'immutable'
import DynamicComponent from '../dynamicUI/dynamicComponent'

const TabPane = Tabs.TabPane

export default class VoucherComponent extends Component{

	constructor(props) {
	    super(props)
	}

	handleChange(meta, oldValue, newValue){
		if(this.props.onChange){
			let fieldPath = meta.name

		}
	}

	render(){


    let a={b:{c:{d:1}}}
    let dd = ['b','c','d']
    
    let eefew = dd.reduce((x,y)=>{
      return a[x][y]})

	debugger
	 	const meta = this.props.meta,
			formItems = [],
	    	tabs = [],
	    	fields = meta.dataSchema.fields

	    fields.forEach((field, index)=>{
	    	if(field.type === 'entityArray'){
	    		tabs.push({meta:field, value: this.props.value[field.name]})
	    	}
	    	else{
	    		formItems.push({meta:field, value: this.props.value[field.name]})
	    	}
	    })

		return (
			 <Form inline style={{paddingTop:20}}>
			 	{formItems.map((item,index)=>(<DynamicComponent key={index} meta={item.meta} value={item.value} onChange={::this.handleChange} />))}

	 			<Tabs type="card">
			 			{tabs.map((item,index)=>(
			 				<TabPane tab={item.meta.title} key={index}>
			 					<DynamicComponent key={index} meta={item.meta} value={item.value} onChange={::this.handleChange} />
			 				</TabPane>
			 			))}
			 	</Tabs>
			 
			 </Form>
		)
	}
}


/*

 */
