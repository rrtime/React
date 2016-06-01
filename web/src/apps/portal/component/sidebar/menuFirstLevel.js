import React from 'react'
import { List } from 'immutable'


export default class MenuFirstLevelComponent extends React.Component {

   handleClick(e) {
       e.preventDefault()
       this.props.onClick(this.props.data.get('Text'), this.props.data.get('Url'))
   }

    render() {
        return(
   				<li className="newML">
   					<div className="newMD"></div>
     				<a href="javascript:void(0)" className="newMA" data-index="[0]" onClick={::this.handleClick}>
       				<span className="newMST ST" id="newMST"></span>
       				<span className="menu-text">{this.props.data.get('Text')}</span>
       				<span className="newMSTIP" id="newMSTIP"></span>
       				<div className="newMDTIP"></div>
     				</a>
   				</li>
        )
    }
}
