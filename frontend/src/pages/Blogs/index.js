import React from 'react'
import DSBlogCard from '../../Components/DSBlogCard'

function Blogs() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <DSBlogCard 
            title="Learn Microinteraction" 
            body="Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Ornare 
            pretium placerat ut platea. Purus 
            blandit integer sagittis massa vel est hac."
            date="Monday Jan 20 , 2020" />
        </div>
        
    )
}

export default Blogs
