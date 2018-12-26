import React from 'react';
import { withRouter } from 'react-router-dom'
import AsideContainer from '../container/AsideContainer';
import HeadContainer from '../container/HeadContainer';
import Affix from '../container/Affix';
import Banner from './Banner'

class Root extends React.Component {
    render() {
        return <div>
            <HeadContainer title={'shengG当年的demo'} />
            <AsideContainer />
            <Affix />
            <Banner />
        </div>
    }
}

export default withRouter(Root)