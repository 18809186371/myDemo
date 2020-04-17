import React, { Component } from 'react'
class EditImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        let { src, alt, width, height, position, display, style = {} } = this.props;
        const imgProps = {
            alt: alt || '',
            src: src || '',
            style: {
                width: `${width || 100}px`,
                height: `${height || 100}px`,
                display: display || 'block',
                position: position || 'absolute',
                top: 0,
                left: 0,
                ...style
            }
        }
        return (
            <img {...imgProps}></img>
        );
    }
}

export default EditImage;