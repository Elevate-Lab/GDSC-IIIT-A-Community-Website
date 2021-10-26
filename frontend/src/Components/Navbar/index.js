import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const navbarContent = [
    "About", "Events", "Team", "Projects", "Blogs", "Contact"
]

function Navbar() {
    return (
        <div>
            <AppBar style={{
                backgroundColor: '#ffffff',
                boxShadow: 'none'
            }} position="static">
                <Toolbar>
                    <Typography style={{
                        color: '#000',
                        flexGrow: 1
                    }}>Navbar</Typography>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        {
                            navbarContent.map((item, index) => (
                                <Link key={index} to={`${item}`} replace ><Typography style={{
                                    color: '#000',
                                    marginLeft: 10,
                                    marginRight: 10
                                }}>{item}</Typography></Link>
                            ))
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
