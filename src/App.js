import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterValue: ""
    };
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => this.setState({ filterValue: e.target.value });

  render() {
    const { monsters, filterValue } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
      <div className="App">
      <h1 className="home-title">Registro de Androides</h1>
        <SearchBox
          type="search"
          placeholder="Buscar Robô"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsterList={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
