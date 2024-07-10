document.addEventListener('DOMContentLoaded', () => {
  fetch('/doc/data/merged_population_long_data.csv')
    .then(response => response.text())
    .then(csvData => {
      // Parse the CSV data using D3
      const data = d3.csvParse(csvData);

      // Convert 'year' and 'value' from string to number
      const cleanedData = data.map(d => ({
        year: parseInt(d.year, 10),  // Convert 'year' to number
        projection: d.projection,
        value: parseFloat(d.value)  // Convert 'value' to number
      })).filter(d => !isNaN(d.year) && !isNaN(d.value));  // Filter out NaN values


      //View the cleaned data
     // Console.log('Cleaned data:', cleanedData);
      

      // Display the initial table and plot
      displayDataAsTable(cleanedData);
      plotMultiLineGraphPlotly(cleanedData);

      // Add event listener to the projection dropdown
      const projectionSelect = document.getElementById('projectionSelect');
      projectionSelect.addEventListener('change', () => {
        const selectedProjection = projectionSelect.value;
        let filteredData = cleanedData;
        if (selectedProjection !== 'all') {
          filteredData = cleanedData.filter(d => d.projection === selectedProjection);
        }
        displayDataAsTable(filteredData);
        plotMultiLineGraphPlotly(filteredData);
      });

      // Add event listener to the export CSV button
      const exportCsvBtn = document.getElementById('exportCsvBtn');
      exportCsvBtn.addEventListener('click', () => {
        exportToCsv(cleanedData, 'population_projections.csv');
      });

    })
    .catch(error => {
      console.error('Error fetching or parsing data:', error);
    });
});

function displayDataAsTable(data) {
// Select the element where you want to append the table
const tableContainer = document.getElementById('table-container');

// Clear any existing content in the table container
tableContainer.innerHTML = '';

// Create a table element
const table = document.createElement('table');

// Create table headers (assuming first object in data has headers)
const headers = Object.keys(data[0]);
const headerRow = document.createElement('tr');
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Create rows for each data entry
data.forEach(item => {
  const row = document.createElement('tr');
  headers.forEach(headerText => {
    const td = document.createElement('td');
    td.textContent = item[headerText];
    row.appendChild(td);
  });
  table.appendChild(row);
});

// Append the table to the container
tableContainer.appendChild(table);
}

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
