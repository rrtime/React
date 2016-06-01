import Immutable,{Map} from 'immutable'
import * as da from '../../templates/voucher/action'

export function initView(id) {
    return injectFuns => {
        da.initView('sa','sa03', id)(injectFuns)
        //da.replaceUtils(injectFuns)(da.getUtils(injectFuns, exports))
    }
}
Object.assign(exports, {...da,
    ...exports
})
