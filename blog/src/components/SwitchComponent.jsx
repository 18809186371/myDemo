import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import ListComponent from './ListComponent/ListComponent';
import SettingComponent from './SettingComponent/SettingComponent';
import ScrollComponent from './ScrollComponent/ScrollComponent';
import ShowDataComponent from './ShowDataComponent/ShowDataComponent';

class SwitchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <Switch>
            <Route path="/home" component={ListComponent} />
            <Route path="/set" component={SettingComponent} />
            <Route path="/scroll" component={ScrollComponent} />
            <Route path="/show" component={ShowDataComponent} />
        </Switch>
    }
}

export default withRouter(SwitchComponent)