import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function BlockchainTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams,parameter} = context
    let attribute = "teams"
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData();
    }, [parameter])
    const blockChain =teams && teams.filter((e) => {
        return e.designation === 'BlockChain';
    })
    return (
        <div id="Blockchain" className="Field_view">
            {blockChain &&
                blockChain.map((teams) => {
                    return <MemberCard
                    key={teams._id}
                     team={teams}
                />
                })
            }
        </div>
    )}

export default BlockchainTeam

