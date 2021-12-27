import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function OpenSourceTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute } = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(attribute)
        getAllData();
    }, [data])
    const opensourceTeam = data.filter((e) => {
        if(data){
        return e.designation === 'Open Source';
        }
    })
    return (
        <div id="opensourceTeam" className="Field_view">
            {opensourceTeam &&
                opensourceTeam.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div>
    )}

export default OpenSourceTeam

