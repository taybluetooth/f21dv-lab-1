const exercise18 = async () => {
  const path =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/csv/ex18.csv";
  const csv = await d3.csv(path);

  const width = 500;
  const barHeight = 20;
  const margin = 1;

  const data = [];
  csv.forEach((entry) => {
    data.push(parseInt(entry.value));
  });

  var scale = d3
    .scaleLinear()
    .domain([d3.min(data), d3.max(data)])
    .range([50, 500]);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  var g = svg
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    });

  g.append("rect")
    .attr("width", function (d) {
      return scale(d);
    })
    .attr("fill", "blue")
    .attr("height", barHeight - margin);

  g.append("text")
    .attr("x", function (d) {
      return scale(d);
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      return d;
    });
};
