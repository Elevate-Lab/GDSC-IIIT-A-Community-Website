import React from 'react'
import { makeStyles } from '@material-ui/core'
import useViewport from '../../viewport/useViewport'

function WEBBtn(props) {
    const {width} = useViewport()

    const { backgroundColor, height, borderRadius, color, style, label, divStyle } = props

    const useStyles = makeStyles({
        button: {
            backgroundColor: backgroundColor,
            padding: 10,
            border: 'none',
            cursor: 'pointer',
            height: height,
            borderRadius: borderRadius,
            color: color,
            fontFamily: 'poppins',
            fontWeight: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            whiteSpace: 'nowrap'
        }
    })

    const classes = useStyles()

    return (
        <div style={divStyle}>
            <button className={classes.button} style={style}>
                {label}
            </button>
        </div>
    )
}

export default WEBBtn
