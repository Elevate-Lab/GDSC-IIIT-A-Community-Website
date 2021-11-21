import React from 'react'
import './MemberCard.css'

function MemberCard({Name,Position,ImageURL,GithubLink,LinkedinLink,TwitterLink}) {
    return (
        <div className="MemberCard_container">
        <div className="team-card">
            <div className="picture">
                <img className="img-fluid" src="https://indianmemetemplates.com/wp-content/uploads/Doge-meme-template.jpg" />
            </div>
            <div className="team-content">
                <h3 className="name">{Name}</h3>
                <h4 className="title">{Position}</h4>
            </div>
            <ul className="social">
                <li><a href="https://www.facebook.com/mohsin.raza.99/" className="fa fa-facebook" aria-hidden="true" target="_blank"></a></li>
                <li><a href="https://github.com/shin-igami" className="fa fa-twitter" aria-hidden="true" target="_blank"></a></li>
                <li><a href="https://www.linkedin.com/in/mohsin-raza-22964b108/" className="fa fa-linkedin" aria-hidden="true" target="_blank"></a></li>
            </ul>
        </div>
    </div>
    )
}

export default MemberCard
