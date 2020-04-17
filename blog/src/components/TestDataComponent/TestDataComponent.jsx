import React from 'react';
import { withRouter } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class TestDataComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    _handleClick1 = (e,i,o) => {
        console.log(i,o)
    }
    render() {
        const data = [];
        for (let i = 0; i < 45; i++) {
            data.push({
                key: i,
                title: `TestDataComponent${i}`,
                age: 24,
                gender: i % 2 === 0 ? '男' : '女'
            })
        }
        return <div>
        <ContextMenuTrigger id="some_unique_identifier">
            {data.map(item => <h2 key={item.key}>{item.title}</h2>)}
        </ContextMenuTrigger>
        <ContextMenu id="some_unique_identifier">
            <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick1}>
                ContextMenu Item 1
            </MenuItem>
            <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick2}>
                ContextMenu Item 2
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{ foo: 'bar' }} onClick={this._handleClick3}>
                ContextMenu Item 3
            </MenuItem>
        </ContextMenu>
        </div>
    }
}

export default withRouter(TestDataComponent);