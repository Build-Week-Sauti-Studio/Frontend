import React from "react";


const Ideas = props => {
    return (
    <div className="card-container">

        <div className="idea-card" key={props.idea.id}>
            <h3>Idea Card</h3>
            <h4>{props.idea.name}</h4>
            <p>{props.idea.location}</p>
            <p>{props.idea.description}</p>
            
        </div>
    
    </div>
    )
}

export default Ideas

