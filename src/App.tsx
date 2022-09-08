import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import "./components/List"
import List from './components/List';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {


  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)
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
      <hr />
      <div>
        <h1>{amount}</h1>
        <button onClick={()=>depositMoney(1000)}>Deposit</button>
        <button onClick={()=>withdrawMoney(500)}>Withdraw</button>
        <button onClick={()=>bankruptMoney()}>Bankrupt</button>
      </div>
    </div>

  );
}

export default App;
