import api from './api'
import * as listAction from '../../../bap/list/action'

export function getPersons(){
	return ({reduce})=>{
		api.getPersons(persons=>{
			reduce('getPersonsSuccess', persons)
		})
	}
}

Object.assign(exports, Object.assign(listAction, exports))

