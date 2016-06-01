import React from 'react'
import { List } from 'immutable'
import MiniButton from './miniButton'
import Search from './search'
import User from './user'
import style from "../../styles/navbar/navbar.less"


export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           miniButtons: [
               { "id": 1, "code": "todo", "name": "待办", "background-position-x":-50 },
               { "id": 2, "code": "alarm", "name": "预警", "background-position-x":-0 },
               { "id": 3, "code": "message", "name": "消息", "background-position-x":-25 },
               { "id": 4, "code": "mobile", "name": "畅捷移动","background-position-x":-150, },
               { "id": 5, "code": "help", "name": "帮助" ,"background-position-x":-125},
               { "id": 6, "code": "service", "name": "服务","background-position-x":-185 }
           ]
       }
    }

    render() {
        return(
            <div className="navbar" id="navbar" role="navigation">
                <div className="container-fluid" >
                    <div id="menu-main" className="navbar-header">
                        <a href="#" className="navbar-indent"></a>
                    </div>
                    <div id="logo" className="navbar-header">
                        <a href="http://www.chanjet.com/" className='logo-a' target="_blank">
                            <img id="logoimg" className='logo-img' src={require('../../img/tpluspro.png')}/>
                        </a>
                    </div>
                    <div className="navbar-header version">
                        <span id="useraccount" className='content' data-ctltype="label" title="激活.000005">激活.000005</span>
                    </div>
                    <ul id="notifylist" className="right" data-ctltype="portalnotifylist">
                        <Search />
                        {this.state.miniButtons.map(x=>
                            <MiniButton key={x.id} title={x.name} background-position-x={x['background-position-x']} />
                        )}
                        <User />
                    </ul>       
                </div>
            </div>
        )
    }
}