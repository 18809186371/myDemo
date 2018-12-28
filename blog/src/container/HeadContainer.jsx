import React from 'react';
import ColorSelect from '../modules/ColorSelect'
import { observer, inject } from 'mobx-react'

@inject('containerStore')
@observer class HeadContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return <div className="container_header" style={{ backgroundColor: this.props.containerStore.headColor }}>
            <ColorSelect updateColor={(color) => this.props.containerStore.changeColor(color)} />
            <h2>{this.props.title}</h2>
        </div>
    }
}

export default HeadContainer;