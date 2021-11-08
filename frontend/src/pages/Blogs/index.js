import React from 'react'
import DSBlogCard from '../../Components/DSBlogCard'
import Headings from '../../Components/Page_headings'
import { Grid } from '@material-ui/core'
import './Blogs.css'

function Blogs() {
    return (
        <section 
            className="Blogs_section" 
            style={{
            width:'100%',
            display: 'flex',
            flexDirection:'column',
            gap:'10vh',
            paddingTop: '10.88vh',
            paddingBottom: '6vh',
            background: '#ffffff'
        }}>
            <Headings 
                LargeHeading="Blogs" 
                SmallHeading="Read our latest blogs"
            />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} container>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                    <Grid style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} item>
                        <DSBlogCard
                            title="Learn Microinteraction"
                            body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
                            date="Monday Jan 20 , 2020" />
                    </Grid>
                </Grid>
            </div>
        </section>
        
    )
}

export default Blogs
