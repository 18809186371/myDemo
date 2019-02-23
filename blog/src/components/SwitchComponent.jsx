import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import ListComponent from './ListComponent/ListComponent';
import SettingComponent from './SettingComponent/SettingComponent';
import ScrollComponent from './ScrollComponent/ScrollComponent';
import ShowDataComponent from './ShowDataComponent/ShowDataComponent';
import DndComponent from './DndComponent/DndComponent';
import UserCenterComponent from './UserCenterComponent/UserCenterComponent';
import UserSettingComponent from './UserSettingComponent/UserSettingComponent';
import reChartsComponent from './reChartsComponent/reChartsComponent';
import BarChartsComponent from './BarChartsComponent/BarChartsComponent';

class SwitchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <Switch>
            <Route path="/show/home" component={ListComponent} />
            <Route path="/show/set" component={SettingComponent} />
            <Route path="/show/scroll" component={ScrollComponent} />
            <Route path="/show/data" component={ShowDataComponent} />
            <Route path="/view/dnd" component={DndComponent} />
            <Route path="/user/center" component={UserCenterComponent} />
            <Route path="/user/setting" component={UserSettingComponent} />
            <Route path="/view/charts" component={reChartsComponent} />
            <Route path="/view/bar" component={BarChartsComponent} />
        </Switch>
    }
}

export default withRouter(SwitchComponent)