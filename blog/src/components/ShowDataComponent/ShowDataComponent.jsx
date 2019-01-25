import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'antd';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";


class BodyRow extends React.Component {
    render() {
        const {...restProps} = this.props;
        const style = {...restProps.style};
        let className = restProps.className;
        return (
            <ContextMenuTrigger id="table_right_click">
                <tr
                    {...restProps}
                    style={style}
                    className={className}
                />
            </ContextMenuTrigger>
        )
    }
}


const ContextBodyRow = BodyRow;

class ShowDataComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    components = {
        body: {
            row: ContextBodyRow,
        },
    }
    render() {
        const data = [];
        for (let i = 0; i < 45; i++) {
            data.push({
                key: i,
                title: `shenG${i}号`,
                age: 24,
                address: `雁塔区西影路${i}号aaaaaa`,
                gender: i % 2 === 0 ? '男' : '女'
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
        }, {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender'
        }];

        return <div>
            <Table dataSource={data} columns={columns} components={this.components}/>
            <ContextMenu id="table_right_click">
                <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick1}>
                    ContextMenu Item 1
                </MenuItem>
                <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick2}>
                    ContextMenu Item 2
                </MenuItem>
                <MenuItem divider />
                <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick3}>
                    ContextMenu Item 3
                </MenuItem>
            </ContextMenu>
        </div >
    }
}

export default withRouter(ShowDataComponent)