import { Divider } from '@mui/material'
import { borderRadius } from '@mui/system'
import * as React from 'react'
import './rangeSlider.css'

export default class MachineStats extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div style = {{width: '30%', height: '80vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems:'center', marginTop: '2vh', padding: '10px'}}>
      <h1>MACHINE STATS</h1>

       <div style = {{width: '90%', height: '50vh', border: '2px solid green',  borderRadius: '10px', display: "flex" }}>
        <input type="range" className='rangeSlider' />
       </div>
       <Divider variant="middle" style={{marginTop: '5px', marginBottom: '5x', color: 'grey'}}/>
       <div style = {{width: '90%', height: '50vh', border: '2px solid green',  borderRadius: '10px', display: "flex" }}></div>
       <Divider variant="middle" style={{marginTop: '5px', marginBottom: '5x', color: 'grey'}}/>
       <div style = {{width: '90%', height: '50vh', border: '2px solid green', background: 'blue', borderRadius: '10px', display: "flex" }}></div>
   </div>
    )

  }

}



