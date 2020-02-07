import React, { useState, useContext, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {IdeaContext} from "../contexts/IdeaContext";
import Ideas from "./Ideas"
const initialIdea = {
  description: "",
  location: "",
  idea: ""
};

const IdeaList = () => {
  const { ideas, updateIdeas, history } = useContext(IdeaContext);
  const [data, setData]=useState([])
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [ideaToEdit, setIdeaToEdit] = useState(initialIdea);
  const [newIdea, setNewIdea] = useState(initialIdea);
  
  const deleteIdea = idea => {
    axiosWithAuth()
      .delete(`https://real-sauti-studio.herokuapp.com/api/inputs/${idea.id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
      })
      history.push("/ideas")
  };

  const addIdea = idea => {
    axiosWithAuth()
      .post("https://real-sauti-studio.herokuapp.com/api/inputs", idea)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      history.push('/inputs');
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

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`real-sauti-studio.herokuapp.com/api/inputs/${e.idea.id}`, ideaToEdit)
      .then(res => {  
        ideas.pop(ideaToEdit)
        updateIdeas([...ideas, res.data])
      })
      .catch(err => {
        console.log(err)})
      }
  return (
  <div>
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
    <div className="edit-form">
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Idea Card</legend>
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
        <div className="add-form">
          <h3>Add A New Idea</h3>
          <form onSubmit={() => addIdea(newIdea)}>
            <label htmlFor="idea">New Description</label>
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
            <label htmlFor="idea">New Location</label>
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
            <button type ="submit">Add New Idea</button>
            </form>
          </div>
    </div>    
  );
};

export default IdeaList;