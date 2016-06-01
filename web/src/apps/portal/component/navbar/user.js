import React from 'react'
import style from "../../styles/navbar/user.less"

export default class UserComponent extends React.Component{
	render(){
		return(
		   <li className="user">
                <a href="#" data-toggle="dropdown" className="a" >
                    <span className="show-img"></span>
                    <span className="show-name"  title="zlj">zlj</span>
                </a>
            </li>
		)
	}
}

