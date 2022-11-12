import * as React from 'react'

export default class JobStats extends React.Component {


    render() {
        return(               
            <div style = {{width: '30%', height: '90vh', border: '2px solid black', background: 'white', borderRadius: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', alignItems:'center'}}>
                <h1>JOB STATS</h1>
                <div style = {{width: '90%', height: '50vh', border: '2px solid grey', borderRadius: '10px', display: "flex" }}></div>
                <div style = {{width: '90%', height: '50vh', border: '2px solid grey', borderRadius: '10px', display: "flex" }}></div>
                <div style = {{width: '90%', height: '50vh', border: '2px solid grey', borderRadius: '10px', display: "flex" }}></div>
            </div>

        )
    }
}