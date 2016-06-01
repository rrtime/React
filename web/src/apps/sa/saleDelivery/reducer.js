import * as dr from '../../templates/voucher/reducer'

export function onFieldChange(state, path, oldValue, newValue) {
	let segments = path.split(',')
	if(segments.length>1 &&(path.indexOf('sa03.form.tabs.details.price') !== -1 || path.indexOf('sa03.form.tabs.details.number') !== -1 )){
		state = dr.setter(state, path, 'value', newValue)
		let price = dr.getter(state, 'sa03.form.tabs.details.price,' + segments[1], 'value'),
			number = dr.getter(state, 'sa03.form.tabs.details.number,' + segments[1], 'value')
		
		return dr.setter(state,'sa03.form.tabs.details.amount,' + segments[1], 'value', price * number )
	}
    return dr.onFieldChange(state, path, oldValue, newValue)
}

Object.assign(exports, {...dr,...exports})
