import React from 'react'
import './MemberCard.css'

function MemberCard({Name,Position,ImageURL,GithubLink,LinkedinLink,MediumLink}) {
    return (
        <div className="MemberCard_container"
            style={{

            }}
        >
            <p className="Member_name">{Name}</p>
            <p className="Member_pos">{Position}</p>
            <p className="Member_img">{ImageURL}</p>
            <p className="Member_Github">{GithubLink}</p>
            <p className="Member_linkedin">{LinkedinLink}</p>
            <p className="Member_Medium">{MediumLink}</p>
        </div>
    )
}

export default MemberCard
