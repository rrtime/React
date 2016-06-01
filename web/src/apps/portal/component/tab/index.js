import React from 'react'
import { Map, List } from 'immutable'
import TabHead from './tabHead'
import TabBody from './tabBody'

import style from '../../styles/tab/tab.less'

export default class TabsComponent extends React.Component {
    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
        PubSub.subscribe('openTab', function(msg, data){
            this.props.addTab(data.name, data.href)
        }.bind(this))
    }

    componentWillUnmount(){
        PubSub.unsubscribe('openTab')
    }




    handleTabClose(name, href){
        this.props.removeTab(href)
        if( href.indexOf('apps/') === -1 )
            document.body.removeChild(document.getElementById(href))
    }

    render() {
        return(
            <div className='tab'>
                <div className='tab-head'>
                    <ul className="nav-tabs" data-ctltype="portaltab" role="tablist">
                        {this.props.tabs.map((value,index)=> 
                            <TabHead key={value.get('href')} 
                                tabName={value.get('name')}
                                tabHref={value.get('href')} 
                                isCurrent={ this.props.currentTab.get('href') === value.get('href') }  
                                onSelectTab={this.props.onSelectTab} 
                                onCloseTab={this.props.onCloseTab} />
                        )}
                    </ul>
                </div>
             
                <div className='tab-body'>
                    {this.props.tabs.map((value,index)=> 
                        <div key={value.get('href')} style={{display: this.props.currentTab.get('href') === value.get('href')? 'block' : 'none' }}>
                            <TabBody tabHref={value.get('href')} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
