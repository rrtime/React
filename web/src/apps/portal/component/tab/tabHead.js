import React from 'react'

export default class TabHeadComponent extends React.Component {

    handleClick(e){
        e.preventDefault()
        e.stopPropagation()
        this.props.onSelectTab( this.props.tabName, this.props.tabHref )
    }

    handleClose(e){
        e.preventDefault()
        e.stopPropagation()
        this.props.onCloseTab(this.props.tabName, this.props.tabHref)
    }

    render() {
        const {tabName, isCurrent } = this.props
        return (
            <li title={tabName} data-index="3" className={isCurrent ?'nav-tab nav-tab-active':'nav-tab'}>
                <a href="javascript:void(0)" role="tab" 
                    data-toggle="tab" aria-expanded="true" 
                    className={isCurrent ?'nav-tab-a nav-tab-a-active':'nav-tab-a'} onClick={::this.handleClick}>
                    {tabName}
                    <i className="fa" onClick={::this.handleClose}></i>
                </a>
            </li>
        )
    }
 }