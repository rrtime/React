import React from 'react'
import style from "../../styles/navbar/search.less"

export default class SearchComponent extends React.Component{
	render(){
		return(
			<li className="searchMenu">
                <input type="text" className="searchInput" placeholder="搜索-产品功能" autocomplete="off" ></input>
                <span  className="searchButton"></span>
            </li>
		)
	}
}

