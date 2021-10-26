import React from 'react'
import DSBlogCard from '../../Components/DSBlogCard'
import { Grid } from '@material-ui/core'

function Blogs() {
    return (
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
        
    )
}

export default Blogs
