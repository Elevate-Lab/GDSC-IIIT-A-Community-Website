import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function ManagementTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams  } = context
    let attribute = "teams"
    useEffect(() => {
        // getAttribute(attribute)
        // getAllData();
        getAllTeamData();
    }, [teams ])
  
    const managementTeam =teams.filter((e) => {
        return e.designation === 'Management';
    })
    return (
        <div id="Web" className="Field_view">
        {managementTeam &&
            managementTeam.map((teams) => {
                return <MemberCard
                key={teams._id}
                 team={teams}
            />
            })
        }
    </div>
    )}

export default ManagementTeam

