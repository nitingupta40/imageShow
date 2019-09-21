import React from 'react';
import './card-styles.css'

export const Card = (props) => 
{
    return (
        <div className="card-container">
            <img alt="characters" src={`https://robohash.org/${props.character.id}?set=set2&size=200x200`}></img>
            <h2>{props.character.name}</h2>
            <p>{props.character.email}</p>
        </div>
    );
}