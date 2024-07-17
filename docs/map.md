---
theme: dashboard
title: Mapping Dashboard
<!-- toc: false -->
style: ./theme.css
---


```js
// Correctly import Plotly and the plotlymap function
import Plotly from "npm:plotly.js-dist-min";
import {plotlymap} from "./static/js/plotly_plots.js"

// Load the data asynchronously and then plot the map
async function loadDataAndPlotMap() {
  const data = await FileAttachment("data/london_boroughs.geojson").json({typed: true});
  console.log(data); // Moved inside the function to access `data`
  plotlymap(data, Plotly);
}

// Call the function to load data and plot the map
loadDataAndPlotMap();
```

<div class="main-content">
  <h1>Plotly Birth Map</h1>
    
  <!-- Choropleth Map Container -->
  <div id="map"></div>
</div>

