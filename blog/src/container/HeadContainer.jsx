import React from 'react';
import { Icon } from 'antd';

class HeadContainer extends React.Component {
   state = {

    }
    constructor(props){
        super(props)
    }
    render(){
        return <div className="container_header">
            <span style={{ paddingRight: 20, cursor: 'pointer' }}><Icon type="menu-unfold" style={{ fontSize: 20, color: '#fff' }} /></span>
        </div>
    }
}

export default HeadContainer;