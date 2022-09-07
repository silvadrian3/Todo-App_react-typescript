import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import "./components/List"
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {


  const [people, setPeople] = useState<IState["people"]>([{
    name: "Lebron James",
    url: "",
    age: 36,
    note: "Test"
  }, {
    name: "Kobe Bryant",
    url: "",
    age: 32
  }]);



  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />

    </div>
  );
}

export default App;
