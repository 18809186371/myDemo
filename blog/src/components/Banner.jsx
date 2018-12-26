import React from 'react';
import { observer, inject } from "mobx-react";

@inject('containerStore')
@observer class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.height = document.documentElement.offsetHeight - 75;
        this.width = document.documentElement.offsetWidth;
    }
    render() {
        let width = this.props.containerStore.sliderVisible ? this.width - 120 : this.width - 215;
        return <div className="container_body" style={{ height: this.height, width }}>
            <div className="container_core">
                
            </div>
        </div>
    }
}
export default Banner