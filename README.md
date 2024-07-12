# Population projections using observable Framework Template and CIU style

## Overview
This project is a dashboard that visualises population projection data using observable markdown framework. The dashboard is a work in progress with new features under development.
The repo is based on the observable template found [Observable Framework](https://observablehq.com/framework) and [here](https://github.com/Greater-London-Authority/observable-framework-template/tree/main), to incorporate the CIU styling 

## Getting Started
Prerequisites
1. Node.js installed on your machine.
2. Basic knowledge of HTML, CSS, Observable framework and JavaScript.
3. Familiarity with D3.js.

## Installation
Clone the repository:
```git clone https://github.com/yourusername/your-repo-name.git```

## Running the Project
Ensure you have a local server running. You can use simple servers like ```http-server``` or ```live-server```. Install one of them globally if you haven't: ```npm install -g http-server```

To start the local preview server, run:

```
npm run dev
```

Then visit <http://localhost:3000> to preview your project.

## Usage
The sidebar includes navigation links and a dropdown menu for dataset selection. The multi-line graph displays the population projections over the years.

## app.js
Handles interactions and functionality related to the application, such as event listeners for the dropdown menu.

## plots.js
Contains the functions for plots which is responsible for rendering the multi-line graph using D3.js.

## main.js
Fetches the CSVs data and initialises graphs by calling functions in plots.js.

## Data
The data folder contains the CSV file merged_population_long_data.csv with population projection data. The data is expected to have the following format:

year,projection,value

2001,5yr,160922740.0

## CSS & Customisation
CSS: Modify the styles in the <style> tags within index.html to customise the appearance of the dashboard. JavaScript: Modify app.js and plots.js to add or change functionality and data visualisation.


The [docs](https://observablehq.com/framework/config#style) describe the following CSS variables:


 *  --theme-foreground - page foreground color, e.g. black
 *  --theme-background - page background color, e.g. white
 *  --theme-background-alt - block background color, e.g. light gray
 *  --theme-foreground-alt - heading foreground color, e.g. brown
 *  --theme-foreground-muted - secondary text foreground color, e.g. dark gray
 *  --theme-foreground-faint - faint border color, e.g. middle gray
 *  --theme-foreground-fainter - fainter border color, e.g. light gray
 *  --theme-foreground-faintest - faintest border color, e.g. almost white
 *  --theme-foreground-focus - emphasis foreground color, e.g. blue


The theme file is in `docs/theme.css`.

Theme files can import CSS files that are part of the Observable project: these are in [this directory](https://github.com/observablehq/framework/tree/main/src/style) of the [`observablehq/framework`](https://github.com/observablehq/framework) repo.

As well as adding a CSS file, I've added the HTML for a footer to `observablehq.config.js`.

## Contributing
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a new Pull Request. 



