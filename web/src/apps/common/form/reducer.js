export function fieldChangeInternal(fieldName, fieldValue){

}

function getFieldValue(state, fieldName){
	return state.getIn(fieldName.split('.'))
}


export function fieldChange(fieldName, oldFieldValue, newFieldValue){
	
}