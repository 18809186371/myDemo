import React from 'react';
import { Icon } from 'antd';
import { inject } from 'mobx-react'

@inject('containerStore')
class Menutool extends React.Component{
    render() {
        return <div className="container_affix_1">
        <span onClick={() => this.props.containerStore.changeDrawerVisible()} style={{ paddingRight: 20, cursor: 'pointer', position: 'absolute' }}>
            <Icon type="left" style={{ fontSize: 30 }} />
            </span>
        </div>
    }
}

export default Menutool