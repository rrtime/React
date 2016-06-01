import React from 'react'
var ReactDOM = require('react-dom');

export default class TabBodyComponent extends React.Component {
    render() {
        return (<iframe src={this.props.tabHref} style={{width:1000,height:500}}></iframe>)
    }
 }