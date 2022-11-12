import Ffmpeg from "./ffmpeg"
import { Divider } from '@mui/material'
import { borderRadius } from '@mui/system'
import * as React from 'react'

export default class CameraFeeds extends React.Component {
    constructor() {
        super()
    }



render() {
    return (
        <div style = {{width: '30%', height: '80vh', border: '2px solid black', background: 'white', borderRadius: '10px', paddingBottom: '30px', marginTop: '10px'}}>
            <h1>LIVE FEED</h1>
           
            <Ffmpeg />
        
        </div>
    )
}}



