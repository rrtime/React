import Immutable,{ Map, List } from 'immutable'

const json = [
  {"id": 1, "code": "save", name:"保存"},
  {"id": 2, "code": "audit", name: "审核"},
  {"id": 3, "code": "print", name: "打印"}
]

const TIMEOUT = 1
const functions = Immutable.fromJS(json)


const saleOrdersJson = [
  {"id": 1, "name": "销售订单001"},
  {"id": 2, "name": "销售订单002"},
  {"id": 3, "name": "销售订单003"}
]

const saleOrders = Immutable.fromJS(saleOrdersJson)

export default {
  getFunctions(sysId, mId, cb, timeout) {
    setTimeout(() => cb(functions), timeout || TIMEOUT)
  },
  getData(sysId,mId,cb,timeout){
  	setTimeout(() => cb(saleOrders), timeout || TIMEOUT)
  }
}

