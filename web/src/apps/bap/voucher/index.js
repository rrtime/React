import React from 'react'


import {List} from 'immutable'

export default class VoucherComponent extends React.Component{
	constructor(props){
		super(props)
	
	}

	componentWillMount(){
	}

	componentDidMount(){
	}
	

	render(){
		return (
			<div>  
				<form>
					 <div className="form-group">
          				<button type="submit" className="btn btn-primary">Save</button>
          				<input value={this.props.payload.get('price')||this.props.payload.get('quantity')}
          					disabled={this.props.payload.get('price')>0} 
          					styel={{display:this.props.payload.get('price')>0?"none":""}}
          				 onBlur={this.set.bind(this,"price",this.refs.price.value)} ref="price" />

          				<input {...ret.price1} ref="price1" />
        			</div>
				</form>
			</div>
		)
	}
}
/*
const c = {
	"price1":{
		post:{"price":"value"}, 
		value:"a+b" ,
		"disabled":"a+b>0" 
	}
	"price2":"price",
	"price3":{"price":function($e){}},

	"price4":{post:{"price":function($e){},"unit":"value+1"}},
	"price5":{post:{"price":function($e){},"unit":"value+1"}
		express:{"disabled":"pirce>0" }
	},
}

}
const ret = link(c)*/