import React from 'react'
import './MemberCard.css'

function MemberCard({Name,Position,ImageURL,GithubLink,LinkedinLink,TwitterLink}) {
    return (
        <div className="MemberCard_container">
            <img className="Member_img" src={ImageURL} alt={Name} />
            <p className="Member_name">{Name}</p>
            <p className="Member_pos">{Position}</p>
            <a className="Member_Github" href={GithubLink}>
                
            </a>
            <a className="Member_linkedin" href={LinkedinLink}>

            </a>
            <a className="Member_Medium" href={TwitterLink}>

            </a>
        </div>
    )
}

export default MemberCard
