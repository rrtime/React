import { Form } from 'antd'

const FormItem = Form.Item

@Form.create({
    mapPropsToFields(props) {
       return {}
    },
    onFieldsChange(props, fields) {
    	for(let f in fields){
    	}
        props.fieldsChange(fields)
    }
})
export default class FromComponent extends React.Component {

}