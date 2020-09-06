import React from "react";
import { Singleton } from "./SingletonMethod";

const SingletonMethodMethodTemplate = () => {
  const myInstance = Singleton.getInstance();
  console.log(myInstance.temperature);
  console.log(myInstance.increaseTemperature());

  const myInstance2 = Singleton.getInstance();
  console.log(myInstance2.temperature, 'seconds');

  return <section className="section">
	<div className="content">
	  <div className="title-component">
		<h4>Singleton Method</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.</p>
		</div>
		<div className="field">
		  <p>STRUCTURE</p>
		</div>
	  </div>
	  <div className="description">
		<img src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-en.png" alt="pattern-structure"/>
	  </div>
	  {/*{array && renderFind()}*/}
	</div>
  </section>
}

export default SingletonMethodMethodTemplate;