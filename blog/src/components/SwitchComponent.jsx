import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import ListComponent from './ListComponent/ListComponent';
import SettingComponent from './SettingComponent/SettingComponent';
import ScrollComponent from './ScrollComponent/ScrollComponent';
import ShowDataComponent from './ShowDataComponent/ShowDataComponent';
import DndComponent from './DndComponent/DndComponent';
import UserCenterComponent from './UserCenterComponent/UserCenterComponent';
import UserSettingComponent from './UserSettingComponent/UserSettingComponent'; 

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
            <Route path="/dnd" component={DndComponent} />
            <Route path="/user/center" component={UserCenterComponent} />
            <Route path="/user/setting" component={UserSettingComponent} />
        </Switch>
    }
}

export default withRouter(SwitchComponent)