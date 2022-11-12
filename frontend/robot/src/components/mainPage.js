import { borderRadius } from '@mui/system'
import * as React from 'react'
import Navbar from './navbar'
import machineStats from './machineStats.js'
import { blue } from '@mui/material/colors'
import MachineStats from './machineStats.js'

import FFMPEG from "react-ffmpeg";
import Ffmpeg from './ffmpeg'
import CameraFeeds from './cameraFeeds'
import JobStats from './jobStats'

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onRouteChange, route, updateSession } = this.props;  
    return(
        <div>
            <Navbar onRouteChange={onRouteChange}/>
            <div style = {{display: "flex", justifyContent: 'space-between',}}>
                 {/* <machineStats /> */}
                <MachineStats />
                <div></div>
                {/* <JobStats /> */}
                <CameraFeeds />         
            </div>
        </div>
    )

    }

}

