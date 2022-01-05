import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function MLTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute } = context
    let attribute = "teams"
    useEffect(() => {
        //getAttribute(attribute)
        getAllData(attribute);
    }, [])
    
    const MLTeam = data.filter((e) => {
        return e.designation === 'ML';
    })
    return (
        <div id="Web" className="Field_view">
        {MLTeam &&
            MLTeam.map((teams) => {
                return <MemberCard
                key={teams._id}
                 team={teams}
            />
            })
        }
    </div>
    )}

export default MLTeam

