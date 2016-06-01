import * as vr from '../../templates/voucher/reducer'

//path voucherDemo.form.tabs.details.price,2
export function onFieldChange(state, path, oldValue, newValue) {
    if (/,/.test(path)) {
        let segments = path.split(','),
            pricePath = 'voucherDemo.form.tabs.details.price',
            numberPath = 'voucherDemo.form.tabs.details.number',
            amountPath = 'voucherDemo.form.tabs.details.amount',
            detailsPath = 'voucherDemo.form.tabs.details'

        if (path.indexOf(pricePath) !== -1 || path.indexOf(numberPath) !== -1) {
            state = vr.setter(state, path, 'value', newValue)

            let index = segments[1],
                row = vr.getter(state, `${detailsPath},${index}`, 'value'),
                price = row.get('price'),
                number = row.get('number')

            return vr.setter(state, `${amountPath},${index}`, 'value', price * number)
        }
    } 
    
    return vr.onFieldChange(state, path, oldValue, newValue)
    
}

Object.assign(exports, {...vr,
    ...exports
})
