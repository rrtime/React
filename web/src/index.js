import React from 'react'
import promise from 'es6-promise'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import Immutable, { Map } from 'immutable'
import logger from 'redux-logger'
import { AppLoader, appMiddleware, reducer } from './appLoader'
import {fetchWrapper} from './utils'
import tplusUtil from './utils/tplusUtil'
import apps from './apps'
import './assets/styles/index.less'

import Perf from 'react-addons-perf'
window.Perf = Perf


const middleware = [ appMiddleware(apps, {...fetchWrapper}, {}) ]

const store = createStore(reducer, Map(), applyMiddleware(...middleware))

promise.polyfill();

render(
	<Provider store ={store}>
		<AppLoader path='apps/root' />
	</Provider>,
	document.getElementById('app')
)
/*
<AppLoader path='apps/sa/saleDelivery' />
 */
