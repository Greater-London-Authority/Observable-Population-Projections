// static/js/app.js

const dataset1 = [
    { year: 2001, "5yr": 160922740, "10yr": 160922740, "15yr": 160922740 },
    { year: 2002, "5yr": 161730679, "10yr": 161730679, "15yr": 161730679 },
    { year: 2003, "5yr": 162537747, "10yr": 162537747, "15yr": 162537747 },
    { year: 2004, "5yr": 163460914, "10yr": 163460914, "15yr": 163460914 },
    { year: 2005, "5yr": 164770667, "10yr": 164770667, "15yr": 164770667 }
    // Add more data as needed
];

const dataset2 = [
    { year: 2001, "5yr": 150000000, "10yr": 150000000, "15yr": 150000000 },
    { year: 2002, "5yr": 151000000, "10yr": 151000000, "15yr": 151000000 },
    { year: 2003, "5yr": 152000000, "10yr": 152000000, "15yr": 152000000 },
    { year: 2004, "5yr": 153000000, "10yr": 153000000, "15yr": 153000000 },
    { year: 2005, "5yr": 154000000, "10yr": 154000000, "15yr": 154000000 }
    // Add more data as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const dataSelector = document.getElementById('dataSelector');
    
    dataSelector.addEventListener('change', (event) => {
        const selectedDataset = event.target.value;
        let data;

        if (selectedDataset === 'dataset1') {
            data = dataset1;
        } else if (selectedDataset === 'dataset2') {
            data = dataset2;
        }

        plotMultiLineGraph(data);
    });

    // Draw the initial plot
    plotMultiLineGraph(dataset1);
});
