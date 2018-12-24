import React from 'react';
import ColorSelect from '../modules/ColorSelect'
import { observer, inject } from 'mobx-react'

@inject('containerStore')
@observer class HeadContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headColor: 'rgb(24,114,114)'
        }
    }
    _updateColor = (color) => {
        this.props.containerStore.changeColor(color)
        this.setState({ headColor: this.props.containerStore.headColor })
    }
    render() {
        return <div className="container_header" style={{ backgroundColor: this.state.headColor }}>
            <ColorSelect updateColor={(color) => this._updateColor(color)} />
            <h2>{this.props.title}</h2>
        </div>
    }
}

export default HeadContainer;