import React from 'react';
import { SketchPicker } from 'react-color';
export default class ColorSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(24,114,114)',
            displayColorPicker: "none",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        let { displayColorPicker, color } = this.state;
        displayColorPicker = displayColorPicker === "none" ? "block" : "none";
        this.setState({ displayColorPicker })
        if (displayColorPicker) {
            this.props.updateColor(color)
        }
    }
    handleChange = (value) => {
        let color = value.hex;
        this.setState({ color })

    }
    render() {
        let { color, displayColorPicker } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}
                    style={{ background: color, border: "none", lineHeight: "31px", height: 31, width: 45, verticalAlign: "middle" }}>
                </button>
                {displayColorPicker === "block" ?
                    <div style={{ position: "absolute", zIndex: 66, top: 50, right: 5 }}>
                        <SketchPicker color={this.state.color} onChange={this.handleChange} />
                    </div> : null
                }
            </div>
        );
    }
}