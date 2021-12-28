import React, { useContext, useEffect } from 'react'
import apiContext from '../../../ContextApi/ApiContext'
import MemberCard from '../../../Components/MemberCard/index'


function AppTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute } = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(attribute)
        getAllData();
    }, [data])
    const appTeam = data.filter((e) => {
        return e.designation === 'App';
    })
    return (
        <div id="App" className="Field_view">
            {appTeam &&
                appTeam.map((teams) => {
                    return <MemberCard
                        key={teams._id}
                        team={teams}
                    />
                })
            }
        </div>
    )
}

export default AppTeam

