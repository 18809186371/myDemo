import React from 'react';

export default class DragHoc extends React.Component {

    moving = false
    lastX = null
    lastY = null
    state = {
        translateX: 0,
        translateY: 0
    }

    componentDidMount() {
        this.Drag = document.getElementById('drag')
        document.addEventListener('mousemove', (e) => {
            if (this.lastX && this.lastY && this.moving) {
                let dx = e.clientX - this.lastX;
                let dy = e.clientY - this.lastY;
                console.log('lastX:' + this.lastX, 'lastY:' + this.lastY)
                this.setState({ translateX: this.state.translateX + dx, translateY: this.state.translateY + dy })
                let xxx = e.clientX - this.Drag.clientLeft;
                let yyy = e.clientY - this.Drag.clientTop;
                console.log(xxx, yyy)
            }
            this.lastX = e.clientX;
            this.lastY = e.clientY;
        })
    }
    _onMouseDown = (event) => {
        let e = event || window.event;
        this.moving = true
    }

    _onMouseUp = (event) => {
        let e = event || window.event;
        this.moving = false
        this.lastX = null
        this.lastY = null
    }

    componentWillUnmount() {

    }
    _onhandleClick = () => {
        console.log(this.Drag.childNodes)
    }

    render() {
        return <div id='drag'
            style={{
                width: 100, height: 100,
                transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`
            }}
            onMouseDown={this._onMouseDown}
            onMouseUp={this._onMouseUp}
            onClick={this._onhandleClick}
        >
            {this.props.children}
        </div>
    }
}
