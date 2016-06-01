import { Map,List } from 'immutable'

export function setMenus(state, menus){
	return state.set('menus',menus)
}

export function setMessages(state, messages){
	return state.set('messages', messages)
}

export function setTodos(state, todos){
	return state.set('todos', todos)
}

export function setAlarms(state, alarms){
	return state.set('alarms', alarms)
}

export function addTab(state, name, href){
	if( !state.has('tabs') )
		state = state.set('tabs', List())

	let tabs = state.get('tabs')

	let tab = null, 
		currentTab = tabs.find(tab=>tab.get('href') === href)

	if( !currentTab ){
		currentTab = Map({name, href})
		tabs = tabs.push(currentTab)		
	}
	return state.set('tabs', tabs).set('currentTab', currentTab)
}

export function selectTab(state, href){
	let tabs = state.get('tabs')
	let currentTab = tabs.find(tab=>tab.get('href') === href)
	return state.set('currentTab', currentTab)
}

export function removeTab(state, href){
	let tabs = state.get('tabs')
	let i = tabs.findIndex(x => x.get('href') === href)
	tabs = i === -1 ? tabs : tabs.remove(i)
	return state.set('tabs', tabs).set('currentTab', tabs.last())
}