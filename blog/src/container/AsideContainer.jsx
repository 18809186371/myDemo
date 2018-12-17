import React from 'react'
import { Menu, Icon, Drawer, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class AsideContainer extends React.Component {
    state = {
        theme: 'light',
        visible: false,
        placement: 'left'
    }
    componentDidMount(){
        
    }
    constructor(props) {
        super(props)
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    }
    onClose = () => {
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Drawer
                    width={230}
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    // mask={false}
                    >
                    <Menu
                        theme={this.state.theme}
                        onClick={this.handleClick}
                        style={{ width: 200 }}
                        mode="inline"
                    >
                        <SubMenu key="
                        " title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Drawer>
                <Button
                    onClick={this.showDrawer}>按钮
                </Button>
            </div>
        );
    }
}

export default AsideContainer