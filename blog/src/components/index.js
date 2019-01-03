import React from 'react';
import { withRouter } from 'react-router-dom'
import AsideContainer from '../container/AsideContainer';
import HeadContainer from '../container/HeadContainer';
import Affix from '../container/Affix';
import Banner from './Banner';
import LogonContainer from '../container/LoginContainer';
import { observer, inject } from 'mobx-react';

@inject('loginStore')
@observer class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.userInfo = sessionStorage.getItem('userInfo')
    }
    render() {
        console.log(this.props.loginStore.loginFlag, this.userInfo)
        return this.props.loginStore.loginFlag || this.userInfo === 'admin' ?
            <React.Fragment>
                <HeadContainer title={'shengG当年的demo'} />
                <AsideContainer />
                <Affix />
                <Banner />
            </React.Fragment> : <LogonContainer />
    }
}

export default withRouter(Root)