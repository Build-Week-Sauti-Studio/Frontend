import React from "react";


const Ideas = props => {
    return (
        <div className="idea-card" key={props.idea.id}>
            <h2>Idea Card</h2>
            <h3>Idea Name:</h3>
            <p> {props.idea.idea}</p>
            <h4>Idea Location: </h4>
            <p>{props.idea.location}</p>
            <h4>Description:</h4>
            <p>{props.idea.description}</p>
            
        </div>
    )
}

export default Ideas

