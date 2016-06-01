import React,{ Component,PropTypes } from 'react'
import { Modal } from 'antd'

export function MessageBox(message){

	if (message ){
        let onOk = message.get('onOk'),
            onCancel = message.get('onCancel')

        if(message.get('type') === 'error') {

            Modal.error({
                ...message.toJS(),
                onOk: function() {
                	if(onOk)
                    	onOk()
                }
            })
        }

        if(message.get('type') === 'confirm'){
              Modal.confirm({
                ...message.toJS(),
                onOk: function() {
                    if(onOk){
                        onOk()
                    }
                  
                },
                onCancel:function(){
                  if(onCancel)
                     onCancel()
                }
            })
        }
    }
}
/*
export default class MessageModalComponent extends React.Component {
    render() {
    	
	   	if(!this.props.payload || !this.props.payload.get('utils') ) 
           return (<div></div>)

        let { payload, onOk } = this.props,
            getter = payload.getIn(['utils', 'getter']),
            handleErrorModalOK = this.handleErrorModalOK,
            message = getter('global', 'message')

        if (message) {
            Modal.error({
                ...message.toJS(),
                onOk: function() {
                	if(onOk)
                    	onOk()
                }
            })
        }

        return (<div></div>)

    }
}
*/