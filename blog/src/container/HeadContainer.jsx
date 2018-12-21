import React from 'react';
import { Icon } from 'antd';
import ColorSelect from '../modules/ColorSelect'

class HeadContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headColor: 'rgb(24,114,114)'
        }
    }
    componentDidMount() {

    }
    _updateColor = (color) => {
        console.log(color)
        this.props.containerStore.changeColor(color)
        this.setState({ headColor: this.props.containerStore.headColor })
    }
    render() {
        return <div className="container_header" style={{ backgroundColor: this.state.headColor }}>
            <ColorSelect updateColor={(color) => this._updateColor(color)} />
            <span style={{ paddingRight: 20, cursor: 'pointer', position: 'absolute', backgroundColor: 'pink' }}>
                <Icon type="menu-unfold" style={{ fontSize: 20, color: '#fff' }} />
            </span>
        </div>
    }
}

export default HeadContainer;