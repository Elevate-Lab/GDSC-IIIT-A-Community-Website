import React, { useContext, useEffect } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'


function BlockchainTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData ,teams } = context
    let attribute = "teams"
    useEffect(() => {
        // getAttribute(attribute)
        // getAllData();
        getAllTeamData();
    }, [teams]);
    const blockChain = teams.filter((e) => {
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

