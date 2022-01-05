import React, { useContext, useEffect,useState } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'



function CoreTeam() {
    const context = useContext(apiContext)
        const { data, getAllData, getAttribute } = context
        let attribute = "teams"
        useEffect(() => {
            //getAttribute(attribute)
            getAllData(attribute);
        }, [])
        const coreTeams = data.filter((e) => {
            return e.designation === 'Core Team'
          })
    return (
            <div id="CoreTeam" className="Field_view">
            {coreTeams &&
                coreTeams.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div>
    )}

export default CoreTeam

