import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialIdea = {
  description: "",
  location: "",
  idea: ""
};

const Dashboard = ({ ideas }) => {
  console.log(ideas);
  const [data, setData]=useState([initialIdea])
  const [editing, setEditing] = useState(false);
  const [ideaToEdit, setIdeaToEdit] = useState(initialIdea);
  const [newIdea, setNewIdea] = useState(initialIdea);
  const [ideaToDelete, setIdeaToDelete]= useState();
  
  const deleteIdea = idea => {
    axiosWithAuth()
      .delete(`https://real-sauti-studio.herokuapp.com/api/inputs/${idea.id}`)
      .then(res => {
        console.log(res)
        setIdeaToDelete(res)
        window.location.reload();
      })
      .catch(err => {
        console.log(err.response)
      })
  };

  const saveEdit = e => {
    console.log(ideaToEdit.id)
    e.preventDefault();
    axiosWithAuth()
      .put(`https://real-sauti-studio.herokuapp.com/api/inputs/${ideaToEdit.id}`, ideaToEdit)
      .then(res => {  
        console.log(res.data);
        setIdeaToEdit(res)
        window.location.reload();
        
      })
      .catch(err => {
        console.log(err.response)})
      }

  const addIdea = idea => {
    axiosWithAuth()
      .post("https://real-sauti-studio.herokuapp.com/api/inputs", idea)
      .then(res => {
        console.log(res)
     
      })
      .catch(err => {
        console.log(err.response)
      })
     
      window.location.reload();
    }

  useEffect(() => {
    axiosWithAuth()
      .get("https://real-sauti-studio.herokuapp.com/api/inputs")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])

  const editIdea = idea => {
    setEditing(true);
    setIdeaToEdit(idea);
  };

  
  return (
  <div>

<div className="add-form">
          <h3>Add A New Idea</h3>
          <form onSubmit={() => addIdea(newIdea)}>
            <h4 >New Description</h4>
            <input
            id="description"
            name="description"
            type="text"
            placeholder="New Description"
            value={newIdea.description}
            onChange={e =>
              setNewIdea({ ...newIdea, [e.target.name]: e.target.value })
            }
            />
            <h4 >New Location</h4>
            <input
            id="location"
            name="location"
            type="text"
            placeholder="New Location"
            value={newIdea.location}
            onChange={e =>
              setNewIdea({ ...newIdea, [e.target.name]: e.target.value })
            }
            />
            <h4 >New Idea</h4>
            <input
            id="idea"
            name="idea"
            type="text"
            placeholder="New Idea"
            value={newIdea.idea}
            onChange={e =>
              setNewIdea({ ...newIdea, [e.target.name]: e.target.value })
            }
            />
            <br/>
            <button type ="submit">Add New Idea</button>
            </form>
          </div>

          <div className="edit-form">
      {editing && (
        <form onSubmit={saveEdit}>
          <h3>Edit Idea Card</h3>
            <label>
                Idea Description:
                <input
                  onChange={e =>
                    setIdeaToEdit({ ...ideaToEdit, description: e.target.value })
                  }
                  value={ideaToEdit.description}
                />
              </label>
              <label>
                Idea Location:
                <input
                  onChange={e =>
                    setIdeaToEdit({ ...ideaToEdit, location: e.target.value })
                  }
                  value={ideaToEdit.location}
                />
              </label>
              <label>
                Idea Name:
                <input
                  onChange={e =>
                    setIdeaToEdit({ ...ideaToEdit, idea: e.target.value })
                  }
                  value={ideaToEdit.idea}
                />
              </label>
              <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditing(false)}>cancel</button>
              </div>
            </form>
      )}
      </div>
       
      <div className="card-container">
        <ul>
        {data.map(idea => (
            <div key ={idea.id}>
              <div className="idea-card">
              {" "}
                <h2>Idea Card</h2>
                <h3>Idea Name:</h3>
                <p> {idea.idea}</p>
                <h4>Idea Location: </h4>
                <p>{idea.location}</p>
                <h4>Description:</h4>
                <p>{idea.description}</p>
                <button className="card-button" onClick={() => editIdea(idea)}>Edit</button>
                <button className="card-button" onClick={e => {
                e.stopPropagation();
                deleteIdea(idea)}
              }>
              X
              </button>
                </div>
          </div> 
        ))}
        </ul>
        </div>
       
    
          
    </div>    
  );
};




export default Dashboard;