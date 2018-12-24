import React from 'react';
import { Icon } from 'antd';
import { observer } from "mobx-react";

const Affix = observer(class Affix extends React.Component {
    constructor(props) {
        super(props)
    }
    handleOnclick = () => {
        this.props.containerStore.changeVisible(!this.props.containerStore.sliderVisible)
    }
    render() {
        return <div className="container_affix">
            <span onClick={this.handleOnclick} style={{ paddingRight: 20, cursor: 'pointer', position: 'absolute' }}>
                <Icon type="desktop" style={{ fontSize: 30, color: this.props.containerStore.headColor }} />
            </span>
        </div>
    }
})
export default Affix