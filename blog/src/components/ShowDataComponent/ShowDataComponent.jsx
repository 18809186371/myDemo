import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'antd'

class ShowDataComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const data = [];
        for (let i = 0; i < 45; i++) {
            data.push({
                key: i,
                title: `shenG${i}号`,
                age: 24,
                address: `雁塔区西影路${i}号`,
                gender: i%2 === 0? '男': '女'
            })
        }

        const columns = [{
            title: '姓名',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },{
            title: '性别',
            dataIndex: 'gender',
            key:'gender'
        }];

        return <Table dataSource={data} columns={columns} />
    }
}

export default withRouter(ShowDataComponent)