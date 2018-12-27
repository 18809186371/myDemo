import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import SettingComponent from './SettingComponent';

class SwitchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <Switch>
            <Route path="/home" component={HomeComponent} />
            <Route path="/set" component={SettingComponent} />
        </Switch>
    }
}

export default withRouter(SwitchComponent)