import * as listReducer from '../../../bap/list/reducer'

export function getPersonsSuccess(state, persons){
	return state.set('data', persons)
}


Object.assign(exports, Object.assign(listReducer, exports))