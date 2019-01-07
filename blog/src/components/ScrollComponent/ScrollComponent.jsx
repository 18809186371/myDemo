import React from 'react';
import { withRouter } from 'react-router-dom';
import { DatePicker, Radio } from 'antd';
const { MonthPicker, WeekPicker } = DatePicker;

class ScrollComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 'default',
        }
    }

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const style = { marginTop: 10 }
        const { size } = this.state;
        return <React.Fragment>
            <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br /><br />
            <DatePicker size={size} style={style} />
            <br />
            <MonthPicker size={size} style={style} placeholder="Select Month" />
            <br />
            <WeekPicker size={size} style={style} placeholder="Select Week" />
        </React.Fragment>
    }
}

export default withRouter(ScrollComponent);