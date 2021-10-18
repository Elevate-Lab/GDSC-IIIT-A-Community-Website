import React from 'react'

function Headings({LargeHeading,SmallHeading}) {
    return (
        <div 
            style={{
            display: 'flex',
            flexDirection: 'column',
            gap:'2px',
            paddingLeft:'9.02%',
            width: 'max-content'
        }}>

            <p 
                style={{
                fontWeight: 'bold',
                fontSize: '3.33vw',
                lineHeight: '4.79vw',                
                color: '#1B2733',
                margin: '0',
                padding: '0',
                width: 'max-content'
            }}>{LargeHeading}</p>
            <p 
                style={{
                fontWeight: '600',
                fontSize: '1.11vw',
                lineHeight: '1.53vw',                
                color: '#637282',
                margin: '0',
                padding: '0',
                width: 'max-content'
            }}>{SmallHeading}</p>
        </div>

        )}
export default Headings