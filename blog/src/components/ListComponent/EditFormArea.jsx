import React from 'react';
import { Drawer, Button, Tabs } from 'antd';
import MForm from './MForm';
import { inject, observer } from 'mobx-react';
const { TabPane } = Tabs;

@inject('containerStore')
@observer
class EditFormArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this.platformList=React.createRef();
    }


    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    updateFormFn=()=>{
        const data=this.platformList.current.getPlatformList();
        console.log(data)
    }
    render() {
        return <div>
                <Button type='primary' onClick={this.updateFormFn}>导出</Button>
                <Drawer
                    title={`图片属性设置`}
                    placement="right"
                    onClose={() => this.props.containerStore.changeDrawerVisible()}
                    visible={this.props.containerStore.DrawerVisible}
                    mask={false}
                    width={400}
                    bodyStyle={{ paddingBottom: 80 }}
                    // footer={
                    //     <div
                    //         style={{
                    //             textAlign: 'right',
                    //         }}
                    //     >
                    //         <Button
                    //             onClick={this.onClose}
                    //             style={{ marginRight: 8 }}
                    //         >
                    //             取消
                    //         </Button>
                    //         <Button onClick={this.updateFormFn}  type="primary">
                    //             确定
                    //         </Button>
                    //     </div>
                    // }
                >
                    <Tabs defaultActiveKey="1" onChange={()=>{}}>
                        <TabPane tab="属性" key="1">
                            <MForm ref={this.platformList}></MForm>
                        </TabPane>
                        <TabPane tab="动画" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="其他" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>

                </Drawer>
            </div>
    }
}

export default EditFormArea