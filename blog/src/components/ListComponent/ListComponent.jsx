import React from 'react';
import { withRouter } from 'react-router-dom';
import DrogHoc from '../DragHoc';
import CanvasHoc from '../CanvasHoc';
import ChildList from './childList';
import { inject, observer } from 'mobx-react';
import EditFormArea from './EditFormArea';

// 此处导入可编辑组件
import EditImage from '../../EditableCom/img/index';
import { toJS } from 'mobx';

@inject('dataJson')
@observer
class VirginDrogComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    _renderEditCom = (list) =>  {
        return list.map((item,index) => {
            switch(item.type) {
                case 'img': 
                    return <DrogHoc key={index}><EditImage {...this.props.dataJson.img} /></DrogHoc> // 这块写的有问题
            }
        })
    }

    render() {
        return <React.Fragment>
            <ChildList />
            <CanvasHoc className="canvasContainer">
                <div>
                    {/* <DrogHoc>
                        <div id="box" style={styles.drogBox}></div>
                    </DrogHoc> */}
                    {/* <DrogHoc>
                        <img style={{ width: 100, height: 100, position: 'absolute',left: 100, zIndex: 999 }} src="https://img.alicdn.com/imgextra/i1/1928865133/O1CN01oin9A41nmxWMSskfG_!!1928865133.jpg" alt="3.jpg" />
                    </DrogHoc> */}
                    {this._renderEditCom(toJS(this.props.dataJson.json.data.children))}
                </div>
            </CanvasHoc>
            <EditFormArea />
        </React.Fragment>
    }
}

const styles = {
    drogBox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
}

export default withRouter(VirginDrogComponent)