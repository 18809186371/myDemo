import React from 'react';
import { withRouter } from 'react-router-dom'
import AsideContainer from '../container/AsideContainer';
import HeadContainer from '../container/HeadContainer';
import Affix from '../container/Affix';
import Menutool from '../container/Menutool';
import Banner from './Banner';
import LogonContainer from '../container/LoginContainer';
import { observer, inject } from 'mobx-react';
import { haderTitle } from '../userConfig';

@inject('loginStore')
@observer class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.userInfo = sessionStorage.getItem('userInfo')
    }
    render() {
        // this.props.loginStore.loginFlag?
        return <React.Fragment>
            <HeadContainer title={haderTitle} />
            <AsideContainer />
            <Menutool />
            <Affix />
            <Banner />
        </React.Fragment>
        // : <LogonContainer />
    }
}

export default withRouter(Root)