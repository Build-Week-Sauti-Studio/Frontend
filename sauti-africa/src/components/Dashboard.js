import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import IdeaList from "./IdeaList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = props => {
  const [ideaList, setIdeaList] = useState([]);
  
  useEffect(() => {
      axiosWithAuth()
        .get('/ideas')
        .then(response => {
          setIdeaList(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);
    
  

  return (
    <>
     <Link to="/"> Home </Link> 
      <IdeaList ideas={ideaList} updateIdeas={setIdeaList} history={props.history}/>
   
    </>
  );
};

export default Dashboard;