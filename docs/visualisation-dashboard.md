<!-- theme: dashboard -->
title: Visualisation Dashboard
<!-- toc: false -->
<!-- style: ./theme.css -->
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
  
  <!-- Control elements -->
  <div class="controls">
    <label for="projectionSelect">Select Projection:</label>
    <select id="projectionSelect">
      <option value="5yr">5yr</option>
      <option value="10yr">10yr</option>
      <option value="15yr">15yr</option>
      <option value="all">All</option>
    </select>
    <button id="exportCsvBtn">Export CSV</button>
  </div>

  <!-- Plotly Multi-Line Graph -->
  <div id="multiLineGraph"></div>
  
  <!-- Table container -->
  <div id="table-container"></div>
</div>

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="static/js/main.js" defer></script>
<script src="static/js/d3_plots.js" defer></script>
<script src="static/js/plotly_plots.js" defer></script>
<script src="static/js/app.js" defer></script>
