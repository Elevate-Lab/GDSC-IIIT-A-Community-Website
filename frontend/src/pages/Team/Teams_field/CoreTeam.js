import React, { useContext, useEffect,useState } from 'react'
import apiContext from '../../../ContextApi/ApiContext'
import MemberCard from '../../../Components/MemberCard/index'


function CoreTeam() {
    const context = useContext(apiContext)
    const { coreTeam,data, getAllData, getAttribute } = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(attribute)
        getAllData();
    }, [data])
    return (
        <div id="CoreTeam" className="Field_view">
            {coreTeam &&
                coreTeam.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div>
    )}

export default CoreTeam

