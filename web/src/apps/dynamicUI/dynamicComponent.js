import React, { Component } from 'react'
import componentFactory from './defaultComponentFactory'

export default class DynamicComponent extends Component {

    constructor(props) {
        super(props)
        this.component = this.getComponent()
    }

    getComponent() {
        let { _meta } = this.props,
            { fieldMeta,component } = _meta

        if (component) {
            return componentFactory.getComponent(component)
        } else
            return componentFactory.getDefaultComponent(fieldMeta.type)
    }

    render() {
        let Component = this.component,
        	{_meta } = this.props
            return (<Component  {...this.props} />)
    }
}

