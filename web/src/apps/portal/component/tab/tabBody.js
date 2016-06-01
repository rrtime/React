import React from 'react'
import FrameTab from './frameTab'
import { AppLoader } from '../../../../appLoader'

export default class TabBodyComponent extends React.Component {
    render() {
        const {tabHref} = this.props
        return (
            <div className='tab-pan'>
                <div className='container-fluid'>
                    {tabHref.indexOf('apps/') !== -1 ?
                        <AppLoader key={tabHref} path={tabHref} />:
                        <FrameTab {...this.props}/>
                    }
                </div>
            </div>
        )
    }
 }