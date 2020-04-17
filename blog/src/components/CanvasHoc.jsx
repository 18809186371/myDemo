import React from 'react';

let THUMBS = [];
for (let i = 0; i < 56; i++) THUMBS.push(i);
let createGrids = (val, i) => <Grid key={i} data={i} />;

class Grid extends React.Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (this.props.data+1)%8 === 0 ? <div className="border_down_box"></div> : <div className="border_right_down_box"></div>
    }
}

class CanvasHoc extends React.Component {
    render() {
        return <div className="canvasContainer">
            {THUMBS.map(createGrids)}
            {this.props.children}
        </div>
    }   
}

export default CanvasHoc