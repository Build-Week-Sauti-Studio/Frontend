import React from "react";


const Ideas = props => {
    return (
    <div className="card-container">
    {props.ideas.map(newIdea => (
        <div className="idea-card" key={newIdea.id}>
            <h3>New Idea Card</h3>
            <h4>{newIdea.name}</h4>
            <p>{newIdea.location}</p>
            <p>{newIdea.description}</p>
            
        </div>
    ))}
    </div>
    )
}

export default Ideas

