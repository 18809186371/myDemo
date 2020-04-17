import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Switch, Select } from 'antd';
import json from '../../EditableCom/img/form.json'
const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
class MForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: json.data
        };
        console.log(json)
    }

    getPlatformList=()=>{
        return this.onFinish()
    }

    onFinish = values => {
        console.log('Success:', values);
        return values
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    onFieldsChange=(changedFields,allFields)=>{
        console.log('changedFields == ',changedFields)
        console.log('allFields == ',allFields)
    }
    onValuesChange=(changedValues,allValues)=>{
        console.log('changedValues',changedValues)
        console.log('allValues',allValues)
    }
    render() {
        let { json } = this.state;
        let defaultValue={
            width: {
                width: 1,
                isSet: true
            },
            height: {
                height: 1,
                isSet: true
            },
            src: {
                src: 1,
                isSet: true
            },
            alt: {
                alt: 1,
                isSet: true
            },
            position: {
                position: 'relative',
                isSet: true
            },
            
        }
        return (
            <React.Fragment>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={defaultValue}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    {
                        json.map((item, index) => {
                            let dom;
                            switch (item.type) {
                                case 'input':
                                    dom = <Input.Group style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                                        <Form.Item
                                            name={[item.name, item.name]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={[item.name, `isSet`]}
                                            valuePropName='checked'
                                        >
                                            <Switch></Switch>
                                        </Form.Item>
                                    </Input.Group>
                                    break;
                                case 'select':
                                    dom = <Input.Group style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                                        <Form.Item
                                            name={[item.name,item.name]}
                                        >
                                            <Select style={{ width: 120 }} onChange={(handleChange) => { }}>
                                                {
                                                    item[item.name]['children'].map((item, index) => {
                                                        return (
                                                            <Option value={item} key={index}>{item}</Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </Form.Item>

                                        <Form.Item
                                            name={[item.name, `isSet`]}
                                            valuePropName='checked'
                                        >
                                            <Switch></Switch>
                                        </Form.Item>
                                    </Input.Group>
                                    break;
                                default:
                                    dom = <Input.Group style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                                        <Form.Item
                                            name={[item.name, item.name]}
                                            initialValues=''
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={[item.name, `isSet`]}
                                            valuePropName='checked'
                                        >
                                            <Switch></Switch>
                                        </Form.Item>
                                    </Input.Group>
                                    break;
                            }
                            return (
                                <Form.Item
                                    label={item.label}
                                    name={item.name}
                                    key={index}
                                >
                                    {dom}
                                </Form.Item>
                            )
                        })
                    }
                    
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit">
                            保存
                    </Button>
                    </Form.Item>

                </Form>

            </React.Fragment>
        );
    }
}

export default MForm;