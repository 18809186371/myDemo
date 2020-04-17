import React from 'react';
import ColorSelect from '../modules/ColorSelect';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { avatarSrc } from '../userConfig'
import { Avatar, Dropdown, Menu, Modal, Icon } from 'antd';

const confirm = Modal.confirm;
@inject('containerStore', 'loginStore')
@observer class HeadContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _handleLogOff = (e) => {
        e.preventDefault()
        let _this = this
        confirm({
            title: 'Do you want to logout?',
            onOk() {
                _this.props.loginStore.handleLogOff()
                sessionStorage.removeItem('userInfo')
            },
            onCancel() {
                
            }
        })
    }

    _toUserCenter = () => {
        this.props.history.push(`/user/center`)
    }

    _toUserSetting = () => {
        this.props.history.push(`/user/setting`)
    }
    render() {
        const menu = (<Menu>
            <Menu.Item>
                <span onClick={this._handleLogOff}><Icon type="logout" style={{ fontSize: 10, paddingRight: 10 }} />注销</span> 
            </Menu.Item>
            {/* <Menu.Item>
                <span onClick={this._toUserCenter}><Icon type="user" style={{ fontSize: 10, paddingRight: 10 }} />个人中心</span> 
            </Menu.Item>
            <Menu.Item>
                <span onClick={this._toUserSetting}><Icon type="tool" style={{ fontSize: 10, paddingRight: 10 }} />个人设置</span> 
            </Menu.Item> */}
        </Menu>)
        return <div className="container_header" style={{ backgroundColor: this.props.containerStore.headColor }}>
            <ColorSelect updateColor={(color) => this.props.containerStore.changeColor(color)} />
            <Dropdown overlay={menu}>
                <Avatar src={avatarSrc} icon="user"
                    style={{ position: "absolute", right: 60, top: 10, backgroundColor: '#fff' }} />
            </Dropdown>
            <h2>{this.props.title}</h2>
        </div>
    }
}

export default withRouter(HeadContainer);