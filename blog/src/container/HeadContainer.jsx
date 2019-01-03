import React from 'react';
import ColorSelect from '../modules/ColorSelect'
import { observer, inject } from 'mobx-react'
import { Avatar, Dropdown, Menu } from 'antd';

@inject('containerStore','loginStore')
@observer class HeadContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleLogOff = (e) => {
        e.preventDefault();
        this.props.loginStore.handleLogOff()
        sessionStorage.removeItem('userInfo')
    }
    render() {
        const menu = (<Menu>
            <Menu.Item>
                <a target="_blank" onClick={this.handleLogOff} href="#">注销</a>
            </Menu.Item>
        </Menu>)
        return <div className="container_header" style={{ backgroundColor: this.props.containerStore.headColor }}>
            <ColorSelect updateColor={(color) => this.props.containerStore.changeColor(color)} />
            <Dropdown overlay={menu}>
                <Avatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                    icon="user" style={{ position: "absolute", right: 60, top: 10, backgroundColor: '#fff' }} />
            </Dropdown>
            <h2>{this.props.title}</h2>
        </div>
    }
}

export default HeadContainer;