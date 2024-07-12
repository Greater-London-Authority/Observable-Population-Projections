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
