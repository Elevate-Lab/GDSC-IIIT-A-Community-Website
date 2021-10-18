import { Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '11vh',
            width: '100%',
            backgroundColor: '#292C2F',
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography>Footer</Typography>
        </div>
    )
}

export default Footer
