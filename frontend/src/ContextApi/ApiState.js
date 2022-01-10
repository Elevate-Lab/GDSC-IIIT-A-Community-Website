import React from 'react'
import { useState } from "react";
import api from '../api/baseApi'
import ApiContext from './ApiContext'

const ApiState = (props) => {
  const [parameter, setParameter] = useState("")
  const [data, setData] = useState("")
  const [blogs, setBlogs] = useState("");
  const [teams,setTeams] = useState("")
  const [projects,setProjects] = useState("")
  const [events,setEvents] = useState("")
  const [previousData, setPreviousData] = useState("")
  const [coreTeam, setCoreTeam] = useState("")
  const getAttribute = (attribute) => {
    setParameter(attribute);
  }

  //teams   
  //GET ALL CARDS
  const retrieveTeamData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get(`/teams`, { headers })
    return response.data;
  }
  const getAllTeamData = async () => {
    const allDatas = await retrieveTeamData();
    setTeams(allDatas);
    if (data) {
      const coreTeams = data.filter((e) => {
        return e.designation === 'Core Team'
      })
      setCoreTeam(coreTeams)
    }
  }

  //post a card
  const addTeamCard = async (values) => {
    console.log(values)
    const request = {
      ...values
    }
    const headers = {
      'Content-Type': 'application/json',
    }
    const response = await api.post(`/teams`, request, { headers })
    setTeams(data.concat(response.data))
  }
  //delete a card
  const removeTeam = async (id) => {
    await api.delete(`/teams/${id}`);
    const newData = data.filter((e) => {
      return e.id !== id;
    });
    setTeams(newData)
  }
  //edit a card
  const previousCardData = (oldData) => {
    setPreviousData(oldData)
  }
  const updateTeam = async (values) => {
    console.log(values);
    const response = await api.put(`/teams/${values._id}`, values)
    const { _id } = response.data;
    setTeams(data &&
      data.map((value) => {
        return value._id === _id ? { ...response.data } : value
      })
    )
  }

  //BLogs      
  //GET ALL CARDS
  const retrieveBlogData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get("/blogs", { headers })
    return response.data;
  }
  const getAllBlogData = async () => {
    const allDatas = await retrieveBlogData();
    setBlogs(allDatas);
  }


//post a card
const addBlogCard = async (values) => {
  console.log(values)
  const request = {
    ...values
  }
  const headers = {
    'Content-Type': 'application/json',
  }
  const response = await api.post("/blogs", request, { headers })
  setBlogs(data.concat(response.data))
}
 //delete a card
 const removeBlog = async (id) => {
   await api.delete(`/blogs/${id}`);
   const newData = data.filter((e) => {
     return e.id !== id;
   });
   setBlogs(newData)
 }

 const updateBlog = async (values) => {
   console.log(values);
   const response = await api.put(`/blogs/${values._id}`, values)
   const { _id } = response.data;
   setBlogs(
     data.map((value) => {
       return value._id === _id ? { ...response.data } : value
     })
   )

}
//Projects      
  //GET ALL CARDS
  const retrieveProjectData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get("/projects", { headers })
    return response.data;
  }
  const getAllProjectData = async () => {
    const allDatas = await retrieveProjectData();
    setProjects(allDatas);
  }


//post a card
const addProjectCard = async (values) => {
  console.log(values)
  const request = {
    ...values
  }
  const headers = {
    'Content-Type': 'application/json',
  }
  const response = await api.post("/projects", request, { headers })
  setProjects(data.concat(response.data))
}
 //delete a card
 const removeProject = async (id) => {
   await api.delete(`/projects/${id}`);
   const newData = data.filter((e) => {
     return e.id !== id;
   });
   setProjects(newData)
 }

 const updateProject = async (values) => {
   console.log(values);
   const response = await api.put(`/projects/${values._id}`, values)
   const { _id } = response.data;
  
   setProjects(data &&
     data.map((value) => {
       return value._id === _id ? { ...response.data } : value
     })
   )
    }
//Events    
  //GET ALL CARDS
  const retrieveEventData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get("/events", { headers })
    return response.data;
  }
  const getAllEventData = async () => {
    const allDatas = await retrieveEventData();
    setEvents(allDatas);
  }


//post a card
const addEventCard = async (values) => {
  console.log(values)
  const request = {
    ...values
  }
  const headers = {
    'Content-Type': 'application/json',
  }
  const response = await api.post("/events", request, { headers })
  setEvents(data.concat(response.data))
}
 //delete a card
 const removeEvent = async (id) => {
   await api.delete(`/events/${id}`);
   const newData = data.filter((e) => {
     return e.id !== id;
   });
   setEvents(newData)
 }

 const updateEvent = async (values) => {
   console.log(values);
   const response = await api.put(`/events/${values._id}`, values)
   const { _id } = response.data;

   setEvents(data &&
     data.map((value) => {
       return value._id === _id ? { ...response.data } : value
     })
   )
    }


return (
  <ApiContext.Provider value={{ coreTeam, data,  previousData, previousCardData,getAllBlogData,addBlogCard,blogs,removeBlog,updateBlog,getAllProjectData,addProjectCard,projects,updateProject,removeProject ,getAllEventData,addEventCard,events,updateEvent,removeEvent,getAllTeamData,addTeamCard,teams,updateTeam,removeTeam}}>
    {props.children}
  </ApiContext.Provider>
)
}
export default ApiState
