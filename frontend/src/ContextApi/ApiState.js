import React from 'react'
import { useState } from "react";
import api from '../api/baseApi'
import ApiContext from './ApiContext'
import moment from 'moment';
const ApiState = (props) => {
  const [parameter, setParameter] = useState("")
  const [data, setData] = useState("")
  const [blogs, setBlogs] = useState("");
  const [teams,setTeams] = useState("")
  const [projects,setProjects] = useState("")
  const [events,setEvents] = useState("")
  const [previousData, setPreviousData] = useState("")
  const [coreTeam, setCoreTeam] = useState("")
  const [upcomingEvents, setUpcomingEvents] = useState('');
  const [pastEvents, setPastEvents] = useState('');
  const [pastTeams, setPastTeams] = useState('');
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
      const coreTeams =teams && teams.filter((e) => {
        return e.designation === 'Core Team'
      })
      setCoreTeam(coreTeams);
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
    setTeams(newData);
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

  //pastTeams
  const retrievePastTeamData = async () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await api.get(`/pastTeams`, { headers })
    return response.data;
  }
  const getAllPastTeamData = async () => {
    const allDatas = await retrievePastTeamData();
    setPastTeams(allDatas);
  }
  //delete a card
  const removePastTeam = async (id) => {
    await api.delete(`/pastTeams/${id}`);
    const newData = data.filter((e) => {
      return e.id !== id;
    });
    setPastTeams(newData);
  }
  //edit a card
  const updatePastTeam = async (values) => {
    console.log(values);
    const response = await api.put(`/pastTeams/${values._id}`, values)
    const { _id } = response.data;
    setPastTeams(data &&
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
   setBlogs(newData);
 }

 const updateBlog = async (values) => {
   console.log(values);
   const response = await api.put(`/blogs/${values._id}`, values)
   const { _id } = response.data;
   setBlogs(data &&
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
    if (allDatas) {
      const upcomingEvent = allDatas.filter((e) => {
        let todayDate = new Date();
        let Date1 = moment(`${todayDate}`).format('YYYY,MM,DD')
        let Date2 = moment(`${e.startDate}`).format("YYYY,MM,DD");
        let currentDate = new Date(`${Date1}`);
        let eventDate = new Date(`${Date2}`)
        if(currentDate.getTime() <= eventDate.getTime()) return e;
      })
      upcomingEvent.sort((a,b) =>{ 
        let Date1 = moment(`${a.startDate}`).format("YYYY,MM,DD");
        let Date2 = moment(`${b.startDate}`).format("YYYY,MM,DD");
        let firstDate = new Date(`${Date1}`);
        let secondDate = new Date(`${Date2}`)
        if ( firstDate.getTime() > secondDate.getTime() ){
          return -1;
        }
        if ( firstDate.getTime()< secondDate.getTime() ){
          return 1;
        }
        return 0;
      });
      setUpcomingEvents(upcomingEvent);
    }
    if (allDatas) {
      const pastEvent = allDatas.filter((e) => {
        let todayDate = new Date();
        let Date1 = moment(`${todayDate}`).format('YYYY,MM,DD')
        let Date2 = moment(`${e.startDate}`).format("YYYY,MM,DD");
        let currentDate = new Date(`${Date1}`);
        let eventDate = new Date(`${Date2}`)
        if(currentDate.getTime() > eventDate.getTime()) return e;
      })
      pastEvent.sort((a,b) =>{ 
        let Date1 = moment(`${a.startDate}`).format("YYYY,MM,DD");
        let Date2 = moment(`${b.startDate}`).format("YYYY,MM,DD");
        let firstDate = new Date(`${Date1}`);
        let secondDate = new Date(`${Date2}`)
        if ( firstDate.getTime() > secondDate.getTime() ){
          return -1;
        }
        if ( firstDate.getTime()< secondDate.getTime() ){
          return 1;
        }
        return 0;
      });
      setPastEvents(pastEvent);
    }
  }


//post a card
const addEventCard = async (values) => {
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
  <ApiContext.Provider value={{ coreTeam, data,  previousData, previousCardData,getAllBlogData,addBlogCard,blogs,removeBlog,updateBlog,getAllProjectData,addProjectCard,projects,updateProject,removeProject ,getAllEventData,addEventCard,events,updateEvent,removeEvent,getAllTeamData,addTeamCard,teams,updateTeam,removeTeam,parameter,getAttribute,upcomingEvents,pastEvents,pastTeams,setPastTeams,getAllPastTeamData,removePastTeam,updatePastTeam}}>
    {props.children}
  </ApiContext.Provider>
)
}
export default ApiState
