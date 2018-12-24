import React from 'react'
import { Menu, Icon } from 'antd';
import { observer, inject } from "mobx-react";
const SubMenu = Menu.SubMenu;
inject('containerStore')
const AsideContainer = observer(class AsideContainer extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            theme: 'light',
            collapsed: false
        }
        this.height = document.documentElement.offsetHeight - 50
    }

    render() {
        // console.log(this.props.containerStore.sliderVisible,1111111111)
        return (
            <div>
                <Menu
                    theme={this.state.theme}
                    mode="inline"
                    inlineCollapsed={this.props.containerStore.sliderVisible}
                    style={{ width: this.props.containerStore.sliderVisible? 100 : 195, height: this.height }}
                >
                    <SubMenu key="" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
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
            </div>
        );
    }
})

export default AsideContainer