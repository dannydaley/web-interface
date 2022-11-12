import { borderRadius } from '@mui/system'
import * as React from 'react'
import Navbar from './navbar'
import machineStats from './machineStats.js'
import { blue } from '@mui/material/colors'
import MachineStats from './machineStats.js'

import FFMPEG from "react-ffmpeg";
import Ffmpeg from './ffmpeg'

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
                <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', alignItems:'center'}}>
                    <h1>JOB STATS</h1>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                </div>
                <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems:'center'}}>
                    <h1>LIVE FEEDS</h1>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid grey', background: blue, borderRadius: '10px', display: "flex" }}>

                    <Ffmpeg />
                    </div>

 </div>         
            </div>
        </div>
    )

    }

}

