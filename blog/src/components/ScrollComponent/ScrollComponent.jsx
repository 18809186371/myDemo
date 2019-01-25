import React from 'react';
import { withRouter } from 'react-router-dom';
// import './contextMenu.css';

class ScrollComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return <div className="contextMenu">
            <ul>
                <li>导出</li>
                <li>清除</li>
                <li>导入</li>
            </ul>
        </div>
    }
}

export default withRouter(ScrollComponent);