import React, { useContext } from 'react'
import './MemberCard.css'
import { Link } from "react-router-dom";
import apiContext from '../../ContextApi/ApiContext';
function MemberCard(props) {
    const {team} = props
    const context = useContext(apiContext)
    const {removeData , previousCardData} =context
    let admin=1;
    return (
      
        <div className="MemberCard_container" style={admin ?{height : "350px"}:{height : "330px"}}>
        {admin &&
        <div className="admin"><Link onClick={()=>previousCardData(team)} to="/Team/EditMember"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
        <a onClick={()=>removeData(team._id)}><i class="fa fa-trash" aria-hidden="true"></i></a></div> }
        <div className="team-card">
            <div className="picture">
                <img className="img-fluid" src={team.image} />
            </div>
            <div className="team-content">
                <h3 className="name">{team.name}</h3>
                <h4 className="title">{team.designation}</h4>
            </div>
            <ul className="social">
                <li><a href={team.facebookLink} className="fa fa-facebook" aria-hidden="true" target="_blank"></a></li>
                <li><a href={team.githubLink} className="fa fa-twitter" aria-hidden="true" target="_blank"></a></li>
                <li><a href={team.linkedinLink} className="fa fa-linkedin" aria-hidden="true" target="_blank"></a></li>
            </ul>
        </div>
    </div>
    )
}

export default MemberCard
