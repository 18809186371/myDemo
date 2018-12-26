import React from 'react';
import { withRouter } from 'react-router-dom';

class SettingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return <div>
            <h1>SettingComponent</h1>
        </div>
    }
}

export default withRouter(SettingComponent);