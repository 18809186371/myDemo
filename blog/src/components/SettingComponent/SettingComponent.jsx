import React from 'react';
import { withRouter } from 'react-router-dom';

class SettingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const data = [];
        for (let i = 0; i < 45; i++) {
            data.push({
                key: i,
                title: `SettingComponent${i}`,
                age: 24,
                gender: i%2 === 0? '男': '女'
            })
        }
        return <React.Fragment>
            {data.map(item => <h2 key={item.key}>{item.title}</h2>)}
        </React.Fragment>
    }
}

export default withRouter(SettingComponent);