import React from 'react'
import Immutable,{List, Map} from 'immutable'
import DynamicComponent from '../../dynamicUI'
import Voucher from '../../templates/voucher'

export default class SaleDeliveryComponent extends Voucher {
    componentDidMount() {
        this.props.initView()
    }

    render() {
        return super.render()
    }
}

