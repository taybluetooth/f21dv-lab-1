const exercise28 = () => {
  var data = [5, 10, 12, 6];

  var width = 200;
  var scaleFactor = 10;
  var barHeight = 20;
  var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet3);

  var graph = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", barHeight * data.length);

  var bar = graph
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * barHeight + ")";
    });

  bar
    .append("rect")
    .attr("width", function (d) {
      return d * scaleFactor;
    })
    .attr("height", barHeight - 1)
    .style("fill", color);

  bar
    .append("text")
    .attr("x", function (d) {
      return d * scaleFactor;
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) {
      return d;
    });
};
