import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function DesignTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams,parameter} = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData();
    }, [parameter])
  
    const designTeam = teams && teams.filter((e) => {
        return e.designation === 'Design';
    })
  
    return (
        <div id="Design" className="Field_view">
        {designTeam &&
            designTeam.map((teams) => {
                return <MemberCard
                key={teams._id}
                 team={teams}
            />
            })
        }
    </div>
    )}

export default DesignTeam

