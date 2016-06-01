import Immutable,{Map} from 'immutable'
import * as la from '../../templates/list/action'
import * as api from './api'

export function initView(id) {
    return injectFuns => {
    	injectFuns.reduce('initView', api.listDemo, la.getUtils(injectFuns, exports))
    }
}


export function onEvent(eventName, option){
	return (injectFuns) =>{
		if(eventName === "delete"){
			let selectedRows = la.getSelectedRows(injectFuns.getState(), 'listDemo.form.tabs.details.select')
			alert( JSON.stringify(selectedRows.map(r=>r.get('id')).toJS()))
		}
		else{
			la.onEvent(eventName, option)(injectFuns)
		}
	}	
}


Object.assign(exports, {...la,...exports})
