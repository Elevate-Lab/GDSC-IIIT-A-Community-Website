import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function AppTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams,parameter} = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData();
    }, [parameter])

    const appTeam =teams && teams.filter((e) => {
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
    )}

export default AppTeam

