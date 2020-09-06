import React from "react";
import { SuperHeroFactory } from './FactoryMethod'


const FactoryMethodTemplate = () => {
  const superheroFactory = new SuperHeroFactory();
  const batman = superheroFactory.createSuperHero({name: 'Batman', type: "hero"});
  const joker = superheroFactory.createSuperHero({name: 'Joker', health: 50, type: "villain"});
  batman.attacked(40);
  joker.attacked(0);

  return <section className='section'>
    <div className="content">
      <div className="title-component">
        <h4>Factory Method</h4>
      </div>
      <div className="description-component">
        <div className="field is-transparent">
          <p>Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.</p>
        </div>
        <div className="field">
          <p>STRUCTURE</p>
        </div>
      </div>
      <div className="description">
        <img src="https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png" alt="pattern-structure"/>
      </div>
      {/*{array && renderFind()}*/}
    </div>
    {/*<div className="code-sample">*/}
    {/*  code sample*/}
    {/*</div>*/}
  </section>
}

export default FactoryMethodTemplate;