const exercise14 = async () => {
  var arr = await exercise10help();

  var data = [];

  arr.forEach((entry) => {
    data.push(entry.count);
  });

  var width = 1000;
  var scaleFactor = 5;
  var barHeight = 20;

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
    })
    .style("fill", "blue");

  bar
    .append("rect")
    .attr("width", function (d) {
      return d * scaleFactor;
    })
    .attr("height", barHeight - 1);

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
