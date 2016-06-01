export default function asyncDownLoadApp(path, cb) {

    if (path === 'apps/root') {
        require.ensure([], require => {
            cb(require('./apps/root/index').default,
            	require('./apps/root/action'),
            	require('./apps/root/reducer'))
        }, 'apps-root')

    } else if (path === 'apps/login') {
        require.ensure([], require => {
            cb(require('./apps/login/index').default,
            	require('./apps/login/action'),
            	require('./apps/login/reducer'))
        }, 'apps-login')

    } 
    else if (path === 'apps/test') {
        require.ensure([], require => {
            cb(require('./apps/test/index').default,
                require('./apps/test/action'),
                require('./apps/test/reducer'))
        }, 'apps-test')

    } 
     else if (path === 'apps/templates/voucher') {
        require.ensure([], require => {
            cb(require('./apps/templates/voucher/index').default,
                require('./apps/templates/voucher/action'),
                require('./apps/templates/voucher/reducer'))
        }, 'apps-voucher')

    }
     else if (path === 'apps/templates/list') {
        require.ensure([], require => {
            cb(require('./apps/templates/list/index').default,
                require('./apps/templates/list/action'),
                require('./apps/templates/list/reducer'))
        }, 'apps-list')

    }
     else if (path === 'apps/sa/saleDelivery') {
        require.ensure([], require => {
            cb(require('./apps/sa/saleDelivery/index').default,
                require('./apps/sa/saleDelivery/action'),
                require('./apps/sa/saleDelivery/reducer'))
        }, 'apps-saleDelivery')

    } else if (path === 'apps/loginNew') {
        require.ensure([], require => {
            cb(require('./apps/loginNew/index').default,
                require('./apps/loginNew/action'),
                require('./apps/loginNew/reducer'))
        }, 'apps-loginNew')

    }else if (path === 'apps/portalNew') {
        require.ensure([], require => {
            cb(require('./apps/portalNew/index').default,
                require('./apps/portalNew/action'),
                require('./apps/portalNew/reducer'))
        }, 'apps-portalNew')

    }else if (path === 'apps/portal') {
        require.ensure([], require => {
            cb(require('./apps/portal/index').default,
            	require('./apps/portal/action'),
            	require('./apps/portal/reducer'))
        }, 'apps-portal')

    } else if (path === "apps/about") {
        require.ensure([], require => {
            cb(require('./apps/about/index').default)
        }, 'apps-about')

    } else if (path === "apps/welcome") {
        require.ensure([], require => {
            cb(require('./apps/welcome/index').default)
        }, 'apps-welcome')

    } else if (path === 'apps/bap/list' || path === "apps/aa/person/list") {
        require.ensure([], require => {
            let {
                component,
                action,
                reducer
            } = {
                component: require('./apps/bap/list/index').default,
                action: require('./apps/bap/list/action'),
                reducer: require('./apps/bap/list/reducer')
            }
            if (path === 'apps/bap/list')
                cb(component, action, reducer)

            else if (path === "apps/aa/person/list") {
                require.ensure([], require => {
                    cb(require('./apps/aa/person/list/index').default,
                    	require('./apps/aa/person/list/action'),
                    	require('./apps/aa/person/list/reducer'))
                }, 'apps-aa-person-list')
            }
        }, 'apps-bap-list')

    } else if (path === 'apps/demo/card') {
        require.ensure([], require => {

            cb(require('./apps/demo/card/index').default,
                require('./apps/demo/card/action'),
                require('./apps/demo/card/reducer'))
        }, 'apps-demo-card')

    }else if (path === 'apps/demo/voucher') {
        require.ensure([], require => {
            cb(require('./apps/demo/voucher/index').default,
                require('./apps/demo/voucher/action'),
                require('./apps/demo/voucher/reducer'))
        }, 'apps-demo-voucher')

    }
    else if (path === 'apps/demo/list') {
        require.ensure([], require => {
            cb(require('./apps/demo/list/index').default,
                require('./apps/demo/list/action'),
                require('./apps/demo/list/reducer'))
        }, 'apps-demo-list')

    }
}
