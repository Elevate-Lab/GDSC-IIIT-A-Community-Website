import React, { useContext, useEffect,useState } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'
import PastTeam from './PastTeam'
import '../Team.css';

function CoreTeam() {
    const context = useContext(apiContext)
    const { data, getAllData, getAttribute,getAllTeamData,teams,parameter} = context
   // let attribute = "teams"
    const [count , setCount] = useState(teams);
  
    useEffect(() => {
        getAttribute(null)
        // getAllData();
        getAllTeamData();
        // let newCount = count -1;
        // setCount(newCount)
        // if(count <= 0){
        //     setCount(null)
        // }
        // console.log(count);
    }, [ parameter ])
    const coreTeam = teams && teams.filter((e) => {
        return e.designation === 'Core Team';
    })
    return (
        <>
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
        	<div className="Past-Member">
            <h3>Past Team Members</h3>
                <PastTeam />
            </div>
            </>
    )}

export default CoreTeam

