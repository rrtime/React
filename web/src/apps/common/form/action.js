
export function fieldChange(fieldName, fieldValue){
	return ({reduce}) =>{
		reduce('fieldChange',fieldName, fieldValue)
	}
}