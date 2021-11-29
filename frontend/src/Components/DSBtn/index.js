import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core'
import useViewport from '../../viewport/useViewport'
import apiContext from '../../ContextApi/ApiContext'
import { Link } from 'react-router-dom'

function WEBBtn(props) {
    const {width} = useViewport()
    const context = useContext(apiContext)
    const {removeData,previousCardData} = context
    const {blogs} = props
    const { backgroundColor, height, borderRadius, color, style, label, divStyle } = props
  
    const useStyles = makeStyles({
        Link: {
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
            <Link className={classes.button} style={style} to={label==="Edit"?"/Blogs/EditBlog":"/Blogs"} onClick={(blogs)=>previousCardData()} >
                {label}
            </Link>
        </div>
    )
}

export default WEBBtn
