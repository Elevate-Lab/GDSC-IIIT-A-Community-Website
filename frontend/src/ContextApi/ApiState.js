import React from 'react'
import { useState } from "react";
import api from '../api/baseApi'
import ApiContext from './ApiContext'

const ApiState = (props) => {
  const [parameter, setParameter] = useState("teams")
    const [data, setData] = useState("")
    const [previousData, setPreviousData] = useState("")
    const [coreTeam, setCoreTeam] = useState("")
    const getAttribute = (attribute) => {
        setParameter(attribute);
       }

 //BLogs      
//GET ALL CARDS
const retrieveData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get(`/${parameter}`, { headers })
    return response.data;
  }
  const getAllData = async () => {
    const allDatas = await retrieveData();
    setData(allDatas);
    if (data) {
      const coreTeams = data.filter((e) => {
        return e.designation === 'Core Team'
      })
      setCoreTeam(coreTeams)
    }
  }

//post a card
const addACard = async(values) =>{
    console.log(values)
    const request = {
      ...values
    }
    const  headers = {
      'Content-Type': 'application/json',
  }
    const response = await api.post(`/${parameter}`,request,{headers})
    setData(data.concat(response.data))
}
//delete a card
const removeData = async (id) =>{
    await api.delete(`/${parameter}/${id}`);
    const newData = data.filter((e)=>{
        return e.id !== id;
    });
    setData(newData)
}
//edit a card
const previousCardData = (oldData)=>{
 setPreviousData(oldData)
}
const updateData =async (values) =>{
    console.log(values);
const response = await api.put(`/${parameter}/${values._id}`,values)
const {_id} = response.data;
setData(
    data.map((value)=>{
        return value._id=== _id ? {...response.data} : value
    })
)
}





    return (
        <ApiContext.Provider value={{coreTeam, data, getAllData,getAttribute ,addACard,removeData,updateData,previousData,previousCardData}}>
        {props.children}
      </ApiContext.Provider>
    )
}

export default ApiState
