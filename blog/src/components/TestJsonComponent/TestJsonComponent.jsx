import React from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { withRouter } from 'react-router-dom';
import { Button, Input } from 'antd'

@inject('dataJson')
@observer
class TestJsonComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        console.log(toJS(this.props.dataJson))
    }

    // 设置img属性的function
    _handleClick = () => {
        this.props.dataJson.addComponentToJson(this.props.dataJson.img)
    }

    _handleSearch = () => {
        console.log(toJS(this.props.dataJson.json))
    }

    _handleOnChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        this.props.dataJson.setAttr('img', key, value)
    }

    render() {
        const { img } = toJS(this.props.dataJson);
        return <div>
               <Button onClick={this._handleClick}>设置img的属性</Button>
               <Button onClick={this._handleSearch}>查看当前Json</Button>
               <div></div>
            宽：<Input value={img.width} name="width" onChange={this._handleOnChange} />
            高：<Input value={img.height} name="height" onChange={this._handleOnChange} />
            src：<Input value={img.src} name="src" onChange={this._handleOnChange} />
            x：<Input value={img.x} name="x" onChange={this._handleOnChange} />
            y：<Input value={img.y} name="y" onChange={this._handleOnChange} />
        </div>
    }
}

export default withRouter(TestJsonComponent)