---
theme: dashboard
title: Mapping Dashboard
<!-- toc: false -->
style: ./theme.css
---
```js
import Plotly from "npm:plotly.js-dist-min";
import {plotlymap} from "./static/js/plotly_plots.js"
plotlymap(data, Plotly)
```
```js
// Load the data

const data = await FileAttachment("data/london_boroughs.geojson").json({typed: true});
```

<div class="main-content">
  <h1>Plotly Birth Map</h1>
    
  <!-- Choropleth Map Container -->
  <div id="map"></div>
</div>


```js
plotlymap(data);
```