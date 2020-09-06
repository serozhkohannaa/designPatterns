import React from 'react';
import './App.scss';
import FactoryMethodTemplate from "./components/FactoryMethod/FactoryMethodTemplate";
import SingletonMethodMethodTemplate from "./components/SingletonMethod/SingletonMethodTemplate";

function App() {
  return (
    <main className="app">
      <div className="page-title">
        <h2>Design patterns</h2>
      </div>
      <FactoryMethodTemplate/>
      <SingletonMethodMethodTemplate/>
    </main>
  );
}

export default App;
