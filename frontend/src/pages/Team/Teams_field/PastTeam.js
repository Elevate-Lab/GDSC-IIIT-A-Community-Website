import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function PastTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllPastTeamData,teams,parameter,pastTeams} = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllPastTeamData();
    }, [parameter])
   console.log(pastTeams);
 
return (
    <div id="PastTeam" className="Field_view">
        {pastTeams &&
            pastTeams.map((teams) => {
                return <MemberCard
                key={teams._id}
                 team={teams}
            />
            })
        }
    </div>
)}

export default PastTeam

