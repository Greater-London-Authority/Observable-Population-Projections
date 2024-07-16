export function plotMultiLineGraphPlotly(data, Plotly) {
    // Get unique years
    const years = Array.from(new Set(data.map(d => d.year)));

    // Get unique projection names
    const projectionNames = Array.from(new Set(data.map(d => d.projection)));

    // Initialise projections object
    const projections = {};
    projectionNames.forEach(name => {
        projections[name] = years.map(year => {
            // Find the data entry for the current year and projection
            const entry = data.find(d => d.year === year && d.projection === name);
            // Return the value or NaN if not found
            return entry ? entry.value : NaN;
        });
    });

    // Log the projections object for debugging
    console.log('Projections:', projections);

    // Prepare traces for Plotly
    const traces = projectionNames.map(name => ({
        x: years,
        y: projections[name],
        mode: 'markers+lines',
        name: name
    }));

    // Define the shapes for vertical lines (e.g., highlighting the year 2015)
    const shapes = [
        {
            type: 'line',
            x0: 2015,
            y0: 0,
            x1: 2015,
            y1: Math.max(...Object.values(projections).flat().filter(y => !isNaN(y))) * 1.05,
            line: {
                color: 'red',
                width: 2,
                dash: 'dash'
            }
        }
    ];

    // Define the layout
    const layout = {
        title: 'Population Projections',
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Population',
            range: [
                Math.min(...Object.values(projections).flat().filter(y => !isNaN(y))) * 0.95, 
                Math.max(...Object.values(projections).flat().filter(y => !isNaN(y))) * 1.05
            ]
        },
        shapes: shapes
    };

    // Plot the graph using Plotly
    Plotly.newPlot('multiLineGraph', traces, layout);
}

export function plotlymap(data, Plotly) {
    // List of columns that can be displayed
    const columns = ['2005', '2010', '2015', 'Change 2005 to 2010', 'Change 2010 to 2015'];

    // Initial column to display
    const initialColumn = '2015';

    // Function to get data for Plotly
    function getData(column) {
        return {
            type: 'choroplethmapbox',
            geojson: gdf.geometry,
            locations: gdf.index,
            z: gdf[column],
            colorscale: 'Viridis',
            marker: { opacity: 0.5 }
        };
    }

    // Create initial plot
    const data = [getData(initialColumn)];

    // Create layout
    const layout = {
        mapbox: {
            style: 'carto-positron',
            center: { lat: 51.5074, lon: -0.1278 },
            zoom: 9
        },
        title: `London Borough Births Data (${initialColumn})`,
        updatemenus: [{
            buttons: columns.map(col => ({
                args: [{'z': [gdf[col]]}, {'title': `London Borough Births Data (${col})`}],
                label: col,
                method: 'restyle'
            })),
            direction: 'down',
            showactive: true
        }]
    };

    // Set up the Plotly map
    Plotly.newPlot('map', data, layout);
}
