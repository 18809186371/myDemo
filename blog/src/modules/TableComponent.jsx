import React from 'react';
import { Table } from 'antd';

class TableComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        <Table dataSource={this.props.data}>
            
        </Table>
    }
}

export default TableComponent