import React from "react";
import { Card } from "./../card/card.component";

import "./card-list.style.css";

export const CardList = props => {
  return (
    <div className="card-list">
      
        {props.monsterList.map(monster => (
          <Card monster={monster} key={monster.id}></Card>
        ))}
    </div>
  );
};
