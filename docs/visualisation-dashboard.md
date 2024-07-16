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
  
  <!-- Table container -->
  <div id="table-container"></div>

  <div id="multiLineGraph"></div>

   <!-- Download Button -->
  <button id="download-btn">Download CSV</button>
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
<!-- ? I have tried to do the button in the observable format but it keeps breaking and there is very limited online pages to trouble shoot compare to using vanilla javascript -->
<!-- ```js
// render as a table, using built-in observable component
Inputs.button(filteredData, 'download.csv')
``` -->


```js
import Plotly from "npm:plotly.js-dist-min";
import {plotMultiLineGraphPlotly} from "./static/js/plotly_plots.js"
plotMultiLineGraphPlotly(filteredData, Plotly)
```
<!-- 
// features for csv dowload button -->
```js
// Define function to export data as CSV
function exportToCsv(data, filename) {
  const csvContent = [
    Object.keys(data[0]).join(','), // header row
    ...data.map(row => Object.values(row).join(',')) // data rows
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```
```js
// Add event listener to the download button
document.getElementById('download-btn').addEventListener('click', () => {
  exportToCsv(filteredData, 'filtered_data.csv');
});
```