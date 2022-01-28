import React, { useContext, useEffect,useState } from 'react'
import MemberCard from '../../../Components/MemberCard/index'
import apiContext from '../../../ContextApi/ApiContext'



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

