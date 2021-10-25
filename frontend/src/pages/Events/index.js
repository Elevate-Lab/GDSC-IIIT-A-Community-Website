import React from 'react'
import {Typography} from '@material-ui/core'
import Even from "./Even.js"

function Events() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography>
                <Even />
            </Typography>
        </div>
    )
}

export default Events
