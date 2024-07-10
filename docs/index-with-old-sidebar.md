<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combined Observable and D3.js Graphs</title>
    <link rel="stylesheet" href="theme.css">
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="static/js/main.js" defer></script>
    <script src="static/js/app.js" defer></script>
    <script src="static/js/plotly_plots.js" defer></script>
    <script src="static/js/d3_plots.js" defer></script>
    <link rel="icon" type="image/png" href="images/GLA-Logo.png">
    <style>
        body {
            display: flex;
            font-family: Arial, sans-serif;
        }
        .sidebar {
            width: 200px;
            padding: 10px;
            background-color: #f4f4f4;
            border-right: 1px solid #ddd;
        }
        .main-content {
            flex-grow: 1;
            padding: 20px;
        }
        .dropdown {
            margin-bottom: 20px;
        }
        #multiLineGraph {
            width: 800px;
            height: 500px;
        }
        .nav-links a {
            display: block;
            margin: 10px 0;
            color: #000;
            text-decoration: none;
        }
        .nav-links a:hover {
            text-decoration: underline;
        }
        .sidebar img {
            width: 100%;
            height: auto;
            display: block;
            margin-bottom: 20px;
        }
        /* Additional styles from the Markdown file */
        .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--sans-serif);
            margin: 4rem 0 8rem;
            text-wrap: balance;
            text-align: center;
        }
        .hero h1 {
            margin: 2rem 0;
            max-width: none;
            font-size: 14vw;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hero h2 {
            margin: 0;
            max-width: 34em;
            font-size: 20px;
            font-style: initial;
            font-weight: 500;
            line-height: 1.5;
            color: var(--theme-foreground-muted);
        }
        @media (min-width: 640px) {
            .hero h1 {
                font-size: 90px;
            }
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <img src="images/GLA-Logo.png" alt="GLA-Logo">
        <h2>Population Projection Sidebar</h2>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="page1.html">Page 1</a>
            <a href="page2.html">Page 2</a>
        </div>
        <p>Some sidebar content...</p>
    </div>
    <div class="main-content">
        <h1>Multi-Line Graph</h1>
        <div id="plotMultiLineGraphD3"></div>
        
        <div class="hero">
            <h1>Hello, Observable Framework</h1>
            <h2>Welcome to your new project! Edit&nbsp;<code style="font-size: 90%;">docs/index.md</code> to change this page.</h2>
            <a href="https://observablehq.com/framework/getting-started">Get started<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
        </div>

        <div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
            <div class="card">
                ${resize((width) => Plot.plot({
                    title: "Your awesomeness over time 🚀",
                    subtitle: "Up and to the right!",
                    width,
                    y: {grid: true, label: "Awesomeness"},
                    marks: [
                        Plot.ruleY([0]),
                        Plot.lineY(aapl, {x: "Date", y: "Close", tip: true})
                    ]
                }))}
            </div>
            <div class="card">
                ${resize((width) => Plot.plot({
                    title: "How big are penguins, anyway? 🐧",
                    width,
                    grid: true,
                    x: {label: "Body mass (g)"},
                    y: {label: "Flipper length (mm)"},
                    color: {legend: true},
                    marks: [
                        Plot.linearRegressionY(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species"}),
                        Plot.dot(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species", tip: true})
                    ]
                }))}
            </div>
        </div>
        
        <script>
            const aapl = FileAttachment("aapl.csv").csv({typed: true});
            const penguins = FileAttachment("penguins.csv").csv({typed: true});
        </script>

        <div>
            <h2>Next steps</h2>
            <div class="grid grid-cols-4">
                <div class="card">
                    Chart your own data using <a href="https://observablehq.com/framework/lib/plot"><code>Plot</code></a> and <a href="https://observablehq.com/framework/javascript/files"><code>FileAttachment</code></a>. Make it responsive using <a href="https://observablehq.com/framework/javascript/display#responsive-display"><code>resize</code></a>.
                </div>
                <div class="card">
                    Create a <a href="https://observablehq.com/framework/routing">new page</a> by adding a Markdown file (<code>whatever.md</code>) to the <code>docs</code> folder.
                </div>
                <div class="card">
                    Add a drop-down menu using <a href="https://observablehq.com/framework/javascript/inputs"><code>Inputs.select</code></a> and use it to filter the data shown in a chart.
                </div>
                <div class="card">
                    Write a <a href="https://observablehq.com/framework/loaders">data loader</a> that queries a local database or API, generating a data snapshot on build.
                </div>
                <div class="card">
                    Import a <a href="https://observablehq.com/framework/javascript/imports">recommended library</a> from npm, such as <a href="https://observablehq.com/framework/lib/leaflet">Leaflet</a>, <a href="https://observablehq.com/framework/lib/dot">GraphViz</a>, <a href="https://observablehq.com/framework/lib/tex">TeX</a>, or <a href="https://observablehq.com/framework/lib/duckdb">DuckDB</a>.
                </div>
                <div class="card">
                    Ask for help, or share your work or ideas, on the <a href="https://talk.observablehq.com/">Observable forum</a>.
                </div>
                <div class="card">
                    Visit <a href="https://github.com/observablehq/framework">Framework on GitHub</a> and give us a star. Or file an issue if you’ve found a bug!
                </div>
            </div>
        </div>
    </div>
</body>
</html>
