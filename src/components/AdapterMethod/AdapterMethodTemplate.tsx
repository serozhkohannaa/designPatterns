import React from "react";
import { GeocodingAdapter } from './adapter';

const AdapterMethodTemplate = () => {
  const gAdapter = new GeocodingAdapter(51.5074, 0.1278, 'Locator');
  const gAdapter2 = new GeocodingAdapter(51.5074, 0.1278, 'GeoCoder');
  const locationFromLocator = gAdapter.locate();
  const locationFromGeoCoder = gAdapter2.locate();

  console.log(locationFromLocator, 'location adapter');
  console.log(locationFromGeoCoder, 'location adapter');

  return <section className="section">
	<div className="content">
	  <div className="title-component">
		<h4>Adapter Method</h4>
	  </div>
	  <div className="description-component">
		<div className="field is-transparent">
		  <p>Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.</p>
		</div>
		<div className="field">
		  <p>STRUCTURE</p>
		</div>
	  </div>
	  <div className="description">
		<img src="https://refactoring.guru/images/patterns/diagrams/adapter/structure-object-adapter.png" alt="pattern-structure"/>
	  </div>
	  {/*{array && renderFind()}*/}
	</div>
  </section>
}

export default AdapterMethodTemplate;