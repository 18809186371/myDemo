import React from 'react';
import { withRouter } from 'react-router-dom';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return <h1>HomeComponent</h1>
    }
}

export default withRouter(HomeComponent)