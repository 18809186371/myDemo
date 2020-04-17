import React from 'react';
import { ReScreen } from 'regraph-next';


export default class ReGraphDemo extends React.Component {
    render() {
        return <ReScreen  
            // height = {500}
            // width = {500}
            mapWidth = {699}
            mapHeight = {800}
            mapPosition = "RT-IN" >
            <svg>
                <g>
                {/* <circle cx={0} cy={0} r={500} fill="yellow" />
                <circle cx={cx} cy={cy} r={250} fill="red" />  */}
                </g>
            </svg> 
        </ReScreen>
    }
}


