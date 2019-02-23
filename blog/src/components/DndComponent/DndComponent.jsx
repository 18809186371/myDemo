import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Dropdown, Menu, Button } from 'antd';

class DndComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      keyCtrlFlag: false,
      keyShiftFlag: false,
      ctrlSelectArr: []
    }
    this.left = 0;
    this.top = 0;
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyDown)
    window.addEventListener('keyup', this._onKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyDown)
    window.removeEventListener('keyup', this._onKeyUp)
  }

  _onKeyDown = (e) => {
    if (e.keyCode === 17) {
      this.setState({ keyCtrlFlag: true })
    } else if (e.keyCode === 16) {
      console.log('shift')
    } else {
      return
    }
  }

  _onKeyUp = (e) => {
    if (e.keyCode === 17) {
      this.setState({ keyCtrlFlag: false })
    } else if (e.keyCode === 16) {
      console.log('shift2')
    } else {
      return
    }
  }

  _rightClick = (e) => {
    e.preventDefault()
    this.left = e.clientX;
    this.top = e.clientY;
    this.setState({ visible: true })
  }

  _handleClick = (e, record) => {
    if (this.state.keyCtrlFlag) {
      // 重复选择的话，就要从已选择的数组中剔除此key
      if(this.state.ctrlSelectArr.includes(record.key)){
        let ctrlSelectArr = this.state.ctrlSelectArr.filter(item => item !== record.key)
        this.setState({ ctrlSelectArr })
      }else {
        if (this.state.ctrlSelectArr.length === 0) {
          this.setState({ ctrlSelectArr: [record.key] })
        } else {
          this.state.ctrlSelectArr.push(record.key)
        }
      }
    } else { // 如果只点击左键，则清空ctrlSelectArr中储存的数据
      this.setState({ visible: false, ctrlSelectArr: [] })
    }
  }

  _handleConsole = () => {
    console.log(this.state.ctrlSelectArr)
  }

  render() {
    const data = [];
    for (let i = 0; i < 45; i++) {
      data.push({
        key: i,
        title: `shenG${i}号`,
        age: 24,
        address: `雁塔区西影路${i}号`,
        gender: i % 2 === 0 ? '男' : '女'
      })
    }

    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={this._handleExport}>
          导出
        </Menu.Item>
        <Menu.Item key="1">
          清除
        </Menu.Item>
        <Menu.Item key="3">
          添加
        </Menu.Item>
      </Menu>
    );

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

    const style = {
      position: 'fixed',
      zIndex: 999,
      left: this.left,
      top: this.top
    }

    return <div>
      <div id="area" style={style}>
        <Dropdown overlay={menu} visible={this.state.visible} getPopupContainer={() => document.getElementById('area')}>
          <a className="ant-dropdown-link" href="#">
            {/* Click me <Icon type="down" /> */}
          </a>
        </Dropdown>
      </div>
      <div className="contain_button_group">
        <Button type="primary" style={{ margin: 20 }} onClick={this._handleConsole}>
          console
        </Button>
      </div>
      <Table dataSource={data} pagination={false} columns={columns} onRow={(record, text) => {
        return {
          onContextMenu: (e) => { this._rightClick(e, record, text) },
          onClick: (e) => { this._handleClick(e, record) }
        }
      }} />
    </div>
  }
}

export default withRouter(DndComponent)