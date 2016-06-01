// React Component
import React,{ Component,PropTypes } from 'react'


export default class Header extends Component {

  render() {
    return (

        <header className="navbar"  role="banner" >
            <div className="container">
                <div className="navbar-header">
                    <a href="http://software.chanjet.com/index.html" target="_blank" className="navbar-brand">
                        <img src={require('../img/tpluspro_skinOne.png')}/>
                    </a>
                </div>
                <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation" >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a target="_blank" href="http://service.chanjet.com/chanjet/tplus" className="login_header" >
                                <span className="i_fankui login_icons middle"></span>
                                <span className="text">意见反馈</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://dad.chanapp.chanjet.com/tplusapp/TPlusBrowser.exe" className="login_header" >
                                <span className="i_brower login_icons middle"></span>
                                <span className="text">T+浏览器</span>
                            </a>
                        </li>
                        <li className="relative">
                            <a target="_blank" href="../SM/RunManage/ClientTool.aspx" className="login_header" >
                                <span className="i_shezhi login_icons middle"></span>
                                <span className="text">浏览器设置</span>
                            </a>
                            <div className="messageBox radius hidden">初次使用,请点击浏览器设置
                                <p><a href="#" className="closebtn">关闭</a></p>
                            </div>
                        </li>
                        <li>
                            <a target="_blank" href="activate.html" className="login_header" >
                                <span className="i_jihuo login_icons middle"></span>
                                <span className="text">激活</span>
                            </a>
                        </li>
                        <li>
                            <p className="login_header red hidden" >此版本为客户验证包，仅客户验证使用！</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
  }
}
