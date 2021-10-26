import React from 'react'
import './Headings.css'

function Headings({ LargeHeading, SmallHeading }) {
    return (
        <div className="Section_Headings">
            <p className="large_heading" >
                {LargeHeading}
            </p>
            <p className="small_heading">
                {SmallHeading}
            </p>
        </div>

    )
}
export default Headings