import React from 'react';
import { List, Icon } from 'antd';
import { inject } from 'mobx-react';
import { toJS } from 'mobx';


@inject('dataJson')class ChildList extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
    }

    componentDidMount() {
        console.log(this.props.dataJson.img, 11)
    }

    shouldComponentUpdate(){
        return false
    }

    _onHandleClick = (type) => {
        this.id++;
        let obj = JSON.parse(JSON.stringify(this.props.dataJson[type]))
        this.props.dataJson.addComponentToJson(obj, `${type + '_' + this.id}`);
        console.log(toJS(this.props.dataJson.json));
    }

    render() {
        return <div style={{ position: 'absolute', left: 10, top: 10 }}>
            <List
                header={<div>组件列表</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item onClick = {() => this._onHandleClick(item.type)}>
                        <h5>
                            {item.title} <Icon type="plus" />
                        </h5>
                    </List.Item>
                )}
            />
        </div>
    }
}

const data = [
    { type: 'img', title: '图片' },
    { type: 'video', title: '视频' },
    { type: 'swiper', title: '轮播' },
    { type: 'tabs', title: 'Tab' },
]

export default ChildList