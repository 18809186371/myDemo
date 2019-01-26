import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Divider, Icon, Tag } from 'antd';
import { avatarSrc } from '../../userConfig';
import { job, address, workPlace, nature } from '../../userConfig';
import UserCenterRighTabs from './children/UserCenterRighTabs'

class UserCenterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVisible: false,
            inputValue: '',
        }
    }
    // _showInput = () => {
    //     this.setState({ inputVisible: true }, () => this.input.focus());
    // }
    render() {
        const style = { width: 150, height: 150, margin: '0 auto', borderRadius: '50%' }
        const fontStyle = { fontSize: 18, fontWeight: 800 }
        return <div>
            <div className="container_card">
                <Card style={{ width: 250, position: 'absolute', bottom: 10, top: 10 }} cover={<img style={style} src={avatarSrc} />}>
                    <h4 style={fontStyle}>shengG</h4>
                    <Divider orientation={"right"}>Info</Divider>
                    <Icon type="profile" /><span className="container_card_span">{job}</span><br />
                    <Icon type="bank" /><span className="container_card_span">{address}</span><br />
                    <Icon type="project" /><span className="container_card_span">{workPlace[0]}</span><br />
                    <Icon type="project" /><span className="container_card_span">{workPlace[1]}</span>
                    <Divider orientation={"right"}>Tags</Divider>
                    <div>
                        {nature.map(x => <Tag style={{ marginTop: 5 }}>{x}</Tag>)}
                    </div>
                    {/* <Tag
                        style={{ background: '#fff', borderStyle: 'dashed', marginTop: 5 }}
                    >
                        <Icon type="plus" /> New Tag
                    </Tag> */}
                </Card>
            </div>
            <div className="container_tabs_container">
                <UserCenterRighTabs />
            </div>
        </div>

    }
}

export default withRouter(UserCenterComponent)