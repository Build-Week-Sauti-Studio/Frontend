import React, { useState } from "react";
import {  useParams } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
const initialIdea = {
  idea: "",
  location: "",
  description: ""
};

const IdeaList = ({ ideas, updateIdeas, history }) => {
  const { id } = useParams();
  console.log(ideas);
  const [editing, setEditing] = useState(false);
  const [ideaToEdit, setIdeaToEdit] = useState(initialIdea);
  const [newIdea, setNewIdea] = useState(initialIdea);
  const editIdea = idea => {
    setEditing(true);
    setIdeaToEdit(idea);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`real-sauti-studio.herokuapp.com/api/inputs/:${id}`, ideaToEdit)
      .then(res => {  
        ideas.pop(ideaToEdit)
        updateIdeas([...ideas, res.data])
      })
      .catch(err => {
        console.log(err)})
  };

  const deleteIdea = idea => {
    axiosWithAuth()
      .delete(`real-sauti-studio.herokuapp.com/api/inputs/:${id}`)
      .then(res => {
        console.log(res)
        
      })
      .catch(err => {
        console.log(err)
      })
      history.push(" real-sauti-studio.herokuapp.com/api/inputs")
  };

  const addIdea = idea =>[
    axiosWithAuth()
      .post(" real-sauti-studio.herokuapp.com/api/inputs", idea)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  ]

  return (
    <div className="ideas-wrap">
      <h2>Ideas</h2>
      <ul>
        {ideas.map(idea => (
          <li key={idea.idea} onClick={() => editIdea(idea)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteIdea(idea)
                  }
                }>
                  x
              </span>{" "}
              {idea.idea}
            </span>
            <div className="idea-box"
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Idea</legend>
          <label>
            Idea name:
            <input
              onChange={e =>
                setIdeaToEdit({ ...ideaToEdit, idea: e.target.value })
              }
              value={ideaToEdit.idea}
            />
          </label>
          <label>
            Location
            <input
              onChange={e =>
                setIdeaToEdit({
                  ...ideaToEdit,
                  location: e.target.value
                })
              }
              value={ideaToEdit.location}
            />
          </label>
          <label>
            Description
            <input
              onChange={e =>
                setIdeaToEdit({
                  ...ideaToEdit,
                  description: e.target.value
                })
              }
              value={ideaToEdit.description}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      <h3>Add A New Idea</h3>
      <form onSubmit={() => addIdea(newIdea)}>
        <label htmlFor="idea">New Idea</label>
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
        <button type ="submit">Add New Idea</button>
      </form>
    </div>
  );
};

export default IdeaList;