import Immutable,{Map} from 'immutable'
import * as va from '../../templates/voucher/action'
import * as api from './api'

export function initView(id) {
    return injectFuns => {
    	injectFuns.reduce('initView', api.cardDemo, va.getUtils(injectFuns, exports))
    }
}


export function onEvent(eventName, option){
	return (injectFuns) =>{
		if(eventName === "save"){
			let a = va.getJson(injectFuns.getState(), 'form')
			alert( JSON.stringify(a))
			//va.validate(injectFuns,'cardDemo.form')
		}else if(eventName === "prevPage"){
			injectFuns.reduce('loadData', 'form', api.cards[0])

		}else if(eventName === "nextPage"){
			injectFuns.reduce('loadData', 'form', api.cards[1])			
		}else if(eventName === "add"){
			injectFuns.reduce('loadData', 'form', api.addData)			
		}
		else{
			va.onEvent(eventName, option)(injectFuns)
		}
	}	
}

Object.assign(exports, {...va,...exports})
