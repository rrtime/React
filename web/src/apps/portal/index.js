import React from 'react'
import {List, Map} from 'immutable'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import Tab from './component/tab'
import style from "./styles/portal.less"

export default class PortalComponent extends React.Component{

    componentDidMount() {
    	this.props.loadPortalData()
    }

	handleMenuClick(name, href){
		//this.refs.tab.getWrappedInstance().refs.connector.getWrappedInstance().props.addTab(name, href)
	    if(href=="apps/logout"){
	      this.props.onLogoutSucess()
	      return
	    }
		this.props.addTab(name, href)
	}

	handleSelectTab(name, href){
		this.props.selectTab(href)
	}

	handleCloseTab(name, href){
		this.props.removeTab(href)
	}

	render(){
		const menus = this.props.payload.get('menus') || List()
		const tabs =  this.props.payload.get('tabs') || List()
		const currentTab = this.props.payload.get('currentTab') || Map()
		return (
			<div className='portal'>
				<Navbar />
				<div className='main-container'>
					<Sidebar menus={menus} onMenuClick={::this.handleMenuClick}/>
					<div className='main-content'>
						<Tab tabs={tabs} currentTab={currentTab} onSelectTab={::this.handleSelectTab} onCloseTab={::this.handleCloseTab}/>
					</div>
				</div>
			</div>
		)
	}
}
