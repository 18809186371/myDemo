import React from 'react';
import { DraggableContainer, DraggableChild } from 'react-dragline';
import { withRouter } from 'react-router-dom';
import DrogHoc from '../DragHoc';

class DragLineComponent extends React.Component {
    state = {
        children: [
            { id: 1, position: { x: 100, y: 10 } },
            { id: 2, position: { x: 400, y: 200 } },
        ]
    }

    render() {
        const containerStyle = {
            height: 600,
            position: 'relative',
        }

        const style = {
            width: 100,
            height: 100,
            cursor: 'move',
            background: '#8ce8df',
        }

        const style2 = {
            width: 200,
            height: 200,
            cursor: 'move',
            background: 'red',
        }


        return (
            <DraggableContainer style={containerStyle}>
                {/* {
                    this.state.children.map(({ id, position }, index) => {
                        return ( */}
                        <DraggableChild defaultPosition={{ x: 100, y: 10 }}>
                            <div style={style} />
                        </DraggableChild>
                        <DraggableChild defaultPosition={{ x: 400, y: 200 }}>
                            <div style={style2} />
                        </DraggableChild>
                        {/* )
                    })
                } */}
                {/* <DrogHoc>
                    <div style={style} />
                </DrogHoc>
                <DrogHoc>
                    <div style={style} />
                </DrogHoc> */}
            </DraggableContainer>
        )
    }
}

export default withRouter(DragLineComponent)
