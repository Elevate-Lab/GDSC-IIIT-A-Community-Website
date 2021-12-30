import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'

function WebTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute } = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(attribute)
        getAllData();
    }, [data])
    console.log(data);
    const webTeam = data.filter((e) => {
        return e.designation === 'Web';
    })

return (
    <div id="Web" className="Field_view">
        {webTeam &&
            webTeam.map((teams) => {
                return <MemberCard
                key={teams._id}
                 team={teams}
            />
            })
        }
    </div>
)}

export default WebTeam