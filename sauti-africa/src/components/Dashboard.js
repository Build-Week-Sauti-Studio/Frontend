import React, { useState } from "react";
import {Link } from "react-router-dom";
import IdeaList from "./IdeaList";


const Dashboard = props => {
  const [ideaList, setIdeaList] = useState([]);
  return (
    <>
     <Link to="/"> Home </Link> 
      <IdeaList ideas={ideaList} updateIdeas={setIdeaList} history={props.history}/>
   
    </>
  );
};

export default Dashboard;