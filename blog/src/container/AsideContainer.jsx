import React from 'react'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { observer, inject } from "mobx-react";
const SubMenu = Menu.SubMenu;
@inject('containerStore')
@observer class AsideContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
        this.height = document.documentElement.offsetHeight - 50
    }

    render() {
        return (
            <React.Fragment>
                <Menu
                    theme={this.state.theme}
                    mode="inline"
                    inlineCollapsed={this.props.containerStore.sliderVisible}
                    style={{ width: this.props.containerStore.sliderVisible ? 100 : 195, height: this.height }}
                >
                    <SubMenu key="" title={<span><Icon type="folder" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1"><Link to="/show/home">List</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/show/set">Set</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/show/scroll">Scroll</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/show/data">Show</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="table" /><span>Navigtion Two</span></span>}>
                        <Menu.Item key="5"><Link to="/dnd">右键表格</Link></Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user" /><span>个人页</span></span>}>
                        <Menu.Item key="11"><Link to="/user/center">个人中心</Link></Menu.Item>
                        <Menu.Item key="12"><Link to="/user/setting">个人设置</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </React.Fragment>
        );
    }
}

export default withRouter(AsideContainer)