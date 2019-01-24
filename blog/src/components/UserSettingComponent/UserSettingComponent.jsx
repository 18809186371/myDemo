import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';

class UserSettingComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return <Card>UserSettingComponent</Card>
    }
}

export default withRouter(UserSettingComponent)