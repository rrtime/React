import React from 'react'
import MenuFirstLevel from './menuFirstLevel'
export default class MenuComponent extends React.Component {

    render() {
        return(
           		<div className='sidebarMenu'>
           			<ul className="nav-list" data-ctltype="portalmenu" id="menu" onselectstart="return false">
           				{this.props.menus.map(value=> 
			              	<MenuFirstLevel 
                        onClick={this.props.onMenuClick}
                        key={value.get('Code')}  
                        data={value} />
			            )}
           			</ul>
				      </div>
        )
    }
}