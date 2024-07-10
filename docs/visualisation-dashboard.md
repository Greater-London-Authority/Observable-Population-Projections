---
theme: dashboard
title: Visualisation Dashboard
<!-- toc: false -->
style: ./theme.css
---

# Visualisation Dashboard

<!-- Sidebar navigation -->

<!-- <div class="sidebar">
  <h2>Sidebar</h2>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="page2.html">Page 2</a>
  </div>
  <p>Some sidebar content...</p>
</div> --> 

<div class="main-content">
  <h1>Plotly Projection Graph</h1>
  

  <!-- Plotly Multi-Line Graph -->
  <div id="multiLineGraph"></div>
  
  <!-- Table container -->
  <div id="table-container"></div>
</div>


```js
const projectionOptions = ["5yr", "10yr", "15yr", "all"]
const selectedProjection = view(Inputs.select(projectionOptions, {value: "all", label: "Select Projection"}));
```

```js
// Load the data

const data = await FileAttachment("data/merged_population_long_data.csv").csv({typed: true});

// filtered data will reactively update when selectedProjection changes
let filteredData;
if (selectedProjection === "all"){
  filteredData = data;
} else {
  filteredData = data.filter(d => d.projection === selectedProjection)
}
```

```js
// render as a table, using built-in observable component
Inputs.table(filteredData)
```


```js
import Plotly from "npm:plotly.js-dist-min";
import {plotMultiLineGraphPlotly} from "./static/js/plotly_plots.js"
plotMultiLineGraphPlotly(filteredData, Plotly)
```
