import React from 'react'
import DynamicComponent from '../../dynamicUI'
import Voucher from '../../templates/voucher'

export default class CardDemoComponent extends Voucher {
    componentDidMount() {
        this.props.initView()
    }

	handleEvent(eventName, option){
    	if(eventName === 'exit'){
    		this.props.onDelTab(this.props.tab.get('url'))
    	}else{
    		this.props.onEvent(eventName, option)	
    	}
    	
    }

    render() {
        return (
        	<DynamicComponent {...this.props} _path="cardDemo"  onEvent={::this.handleEvent}/>
        )
    }
}

