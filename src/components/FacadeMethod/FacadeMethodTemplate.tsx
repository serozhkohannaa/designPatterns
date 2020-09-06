import React from "react";
import { Facade, clientCode, Subsystem1, Subsystem2 } from "./facade";

const FacadeMethodTemplate = () => {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();
  const facade = new Facade(subsystem1, subsystem2);
  clientCode(facade);

  return <section className="section">
	<div className="content">
	  <div className="title-component">
		<h4>Facade Method</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.</p>
		</div>
		<div className="field">
		  <p>STRUCTURE</p>
		</div>
	  </div>
	  <div className="description">
		<img src="https://refactoring.guru/images/patterns/diagrams/facade/structure.png" alt="pattern-structure"/>
	  </div>
	</div>
  </section>
}

export default FacadeMethodTemplate;