import Immutable from 'immutable'
import * as da from '../../dynamicUI/action'
import * as api from './api'

export function initView(sysId, mId, id) {
    return injectFuns => {
        let utils = da.getUtils(injectFuns, exports)
        da.initView(api[mId], utils)(injectFuns)
    }
}

export function getter(injectFuns) {
    return (path, property) => {
    	if(property === 'dataSource'){
    		let dataSource = da.getter(injectFuns)(path, 'dataSource')
    		if(typeof dataSource === 'string' && /rest/i.test(dataSource)){
    			return da.getterByField(injectFuns)(['dataSource',dataSource])
    		}
    	}

    	if(property === 'dropDataSource'){
    		let dropDataSource = da.getter(injectFuns)(path, 'dropDataSource')
    		if(typeof dropDataSource === 'string' && /rest/i.test(dropDataSource)){
    			return da.getterByField(injectFuns)(['dataSource',dropDataSource])
    		}
    	}

    	return da.getter(injectFuns)(path, property)
    }
}


export function lazyLoad(path, property, options) {
    return (injectFuns) => {
    	if(property === 'dataSource'){
    		let dataSource = da.getter(injectFuns)(path, 'dataSource')
    		if(typeof dataSource === 'string' && /rest/i.test(dataSource)){
    			injectFuns.reduce('setterByField', ['dataSource',dataSource], Immutable.fromJS(restCall(dataSource)))
    		}
    	}

    	if(property === 'dropDataSource'){
    		let dropDataSource = da.getter(injectFuns)(path, 'dropDataSource')
    		if(typeof dropDataSource === 'string' && /rest/i.test(dropDataSource)){
    			injectFuns.reduce('setterByField', ['dataSource',dropDataSource], Immutable.fromJS(restCall(dropDataSource)))
    		}
    	}
    }
}

function restCall(url){
	if(url == 'rest://bizTypes'){
		return api.bizTypes
	}

	if(url == 'rest://goodsReference')
		return api.goodsReference
}


export function onEvent(eventName, option){
	return (injectFuns) =>{
		if(eventName === "onDelRow"){
			injectFuns.reduce('delRow',option.path)
		}
		else if(eventName === 'onAddRow'){
			injectFuns.reduce('addRow',option.path,  da.getter(injectFuns)(option.path, 'emptyRow'))
		}
        else if(eventName === 'onAddTenRow'){
            let emptyRow = da.getter(injectFuns)(option.path, 'emptyRow')
            for(let i =0 ;i < 10; i ++)
                injectFuns.reduce('addRow',option.path,  emptyRow)
        }
		else if(eventName === 'onInsertRow'){
			injectFuns.reduce('insertRow', option.path, da.getter(injectFuns)(option.path, 'emptyRow'))
		}
        else if(eventName === 'onDelAllRow'){
            injectFuns.reduce('delAllRow', option.path)
        }
        else if(eventName === 'onDelSelectedRow'){
            injectFuns.reduce('delSelectedRow', option.path)
        }
        else if(eventName === 'save'){
			alert(eventName)
			//da.validate(injectFuns,'sa03.form')
		}
		else{
			da.onEvent(eventName, option)(injectFuns)
		}
	}	
}


Object.assign(exports, {...da, ...exports})
