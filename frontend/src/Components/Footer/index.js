import { Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '10vh',
            width: '100%',
            backgroundColor: '#efefef',
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography>Footer</Typography>
        </div>
    )
}

export default Footer
