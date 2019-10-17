import React from "react";

import "./card.style.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="Robôs"
      src={`https://robohash.org/${props.monster.id}?size=200x200`}
    />
    <h1 className="robot-name">{props.monster.name}</h1><br/>
    <span className="robot-info">Nome de Usuário:</span>
    <span className="robot-info_data"> {props.monster.username}</span><br/>
    <span className="robot-info">Email:</span>
    <span className="robot-info_data"> {props.monster.email}</span><br/>
    <span className="robot-info">Telefone:</span>
    <span className="robot-info_data"> {props.monster.phone}</span><br/>
    <span className="robot-info">Site:</span>
    <span className="robot-info_data"> {props.monster.website}</span><br/>
  </div>
);
