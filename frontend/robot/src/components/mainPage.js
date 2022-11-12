import { borderRadius } from '@mui/system'
import * as React from 'react'
import Navbar from './navbar'
import machineStats from './machineStats.js'
import { blue } from '@mui/material/colors'

export default function MainPage() {
    return(
        <div>
            <Navbar />
            <div style = {{display: "flex", justifyContent: 'space-between',}}>
                 {/* <machineStats /> */}
                <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
                   <h1>MACHINE STATS</h1>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                </div>
                <div></div>
                <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
                    <h1>JOB STATS</h1>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                </div>
                <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
                    <h1>LIVE FEEDS</h1>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                    <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: blue, borderRadius: '10px', display: "flex" }}></div>
                </div>         
            </div>
        </div>
    )
}

