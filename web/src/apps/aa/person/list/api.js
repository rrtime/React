import Immutable,{ List } from 'immutable'

const json = [
  {"id": 1, "name": "张三"},
  {"id": 2, "name": "李四"},
  {"id": 3, "name": "王五"}
]




const TIMEOUT = 1
const persons = Immutable.fromJS(json)

export default {
  getPersons(cb, timeout) {
    setTimeout(() => cb(persons), timeout || TIMEOUT)
  }

}

