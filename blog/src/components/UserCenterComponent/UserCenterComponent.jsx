import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Divider  } from 'antd';
import { avatarSrc } from '../../userConfig'

class UserCenterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        const style = { width: 150, height: 150, margin: '0 auto', borderRadius: '50%' }
        const fontStyle = { fontSize: 18, fontWeight: 800 }
        return <div className="container_card" id="cardContainer">
            <Card style={{ width: 250, position: 'absolute', bottom: 10, top: 10 }} cover={<img style={style} src={avatarSrc}/>}>
            <h4 style={fontStyle}>shengG</h4>
            <Divider orientation={"right"}>Info</Divider>
            UserCenterComponent
        </Card>
        </div>
    }
}

export default withRouter(UserCenterComponent)