import React, { Component } from 'react'
import defaultComponentFactory from './defaultComponentFactory'

function getComponent(fieldType, componentName, componentFactory) {
    let cf = componentFactory || defaultComponentFactory

    if (componentName) {
        return cf.getComponent(componentName)
    } else
        return cf.getDefaultComponent(fieldType)
} 

const DynamicComponent = (props) =>{
    let {payload, _path, _component, componentFactory} = props
    if(!payload|| !payload.get('utils') ) 
        return (<div></div>)

    let  getter = payload.getIn(['utils','getter']),
        fieldType = getter(_path, 'type'),
        componentName = _component || getter(_path, 'component')

    let Component = getComponent(fieldType, componentName, componentFactory)

     return (
        <Component {...props} _getter={props._getter || getter} />
    )

}

export default DynamicComponent


/*

export default class DynamicComponent extends Component {
    constructor(props) {
        super(props)
    }

    getComponent(fieldType, componentName) {
        let cf = this.props.componentFactory || componentFactory

        if (componentName) {
            return cf.getComponent(componentName)
        } else
            return cf.getDefaultComponent(fieldType)
    } 

    shouldComponentUpdate(nextProps){
        return true
    }

    render() {
        if(!this.props.payload || !this.props.payload.get('utils') ) 
            return (<div></div>)

        let { payload, _path, _component } = this.props,
            path = _path,
            getter = payload.getIn(['utils','getter']),
            fieldType = getter(path, 'type'),
            componentName = _component || getter(path, 'component')

        let Component = this.getComponent(fieldType, componentName)

        return  (
            <Component {...this.props} _getter={this.props._getter || getter} />
        )
    }
}*/

