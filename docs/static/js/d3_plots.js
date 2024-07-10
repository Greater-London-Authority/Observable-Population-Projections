function plotMultiLineGraphD3(data) {
    const margin = { top: 40, right: 80, bottom: 40, left: 50 },
          width = 800 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;
  
    d3.select("#multiLineGraph").selectAll("*").remove();
  
    const svg = d3.select("#multiLineGraph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    const parseYear = d3.timeParse("%Y");
  
    data.forEach(d => {
        d.year = parseYear(d.year);
        d["5yr"] = +d["5yr"];
        d["10yr"] = +d["10yr"];
        d["15yr"] = +d["15yr"];
    });
  
    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.year))
        .range([0, width]);
  
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d["5yr"], d["10yr"], d["15yr"]))])
        .nice()
        .range([height, 0]);
  
    const line5yr = d3.line()
        .x(d => x(d.year))
        .y(d => y(d["5yr"]));
  
    const line10yr = d3.line()
        .x(d => x(d.year))
        .y(d => y(d["10yr"]));
  
    const line15yr = d3.line()
        .x(d => x(d.year))
        .y(d => y(d["15yr"]));
  
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(d3.timeYear.every(1)).tickFormat(d3.timeFormat("%Y")));
  
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));
  
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat(""));
  
    svg.append("g")
        .attr("class", "grid")
        .call(d3.axisLeft(y)
            .tickSize(-width)
            .tickFormat(""));
  
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line5yr)
        .style("stroke", "steelblue")
        .style("fill", "none");
  
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line10yr)
        .style("stroke", "red")
        .style("fill", "none");
  
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line15yr)
        .style("stroke", "green")
        .style("fill", "none");
  
    svg.append("text")
        .attr("x", width - 10)
        .attr("y", y(data[data.length - 1]["5yr"]))
        .attr("dy", ".35em")
        .style("fill", "steelblue")
        .style("font-size", "12px")
        .text("5yr");
  
    svg.append("text")
        .attr("x", width - 10)
        .attr("y", y(data[data.length - 1]["10yr"]))
        .attr("dy", ".35em")
        .style("fill", "red")
        .style("font-size", "12px")
        .text("10yr");
  
    svg.append("text")
        .attr("x", width - 10)
        .attr("y", y(data[data.length - 1]["15yr"]))
        .attr("dy", ".35em")
        .style("fill", "green")
        .style("font-size", "12px")
        .text("15yr");
  
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Year");
  
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Population");
  
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Population Projections");
  }
  