import Immutable from 'immutable'
import * as da from '../../dynamicUI/action'
import * as api from './api'

export function initView(sysId, mId, id) {
    return injectFuns => {
        let utils = da.getUtils(injectFuns, exports)
        da.initView(api[mId], utils)(injectFuns)
    }
}


Object.assign(exports, {...da, ...exports})
