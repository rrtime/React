import React from 'react'
import Menu from './menu'
import style from '../../styles/sidebar/sidebar.less'

export default class SidebarComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
           <div className="sidebar" id="sidebar" onselectstart="return false">
              <Menu menus={this.props.menus} onMenuClick={this.props.onMenuClick}/>
      	   </div>
        )
    }
}

/*
<div id="sidebarMenu" className='sidebarMenu'>
                <ul className="nav-list" data-ctltype="portalmenu" id="menu" onselectstart="return false">
                   {this.props.menus.map(value=> 
                      <SidebarItem key={value.get('Code')} 
                        menuName={value.get('Text')} 
                        menuHref={value.get('Url')} 
                        onMenuClick={::this.handleMenuClick} />
                  )}
                </ul>
              </div>
 */