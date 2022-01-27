const exercise20 = () => {
  var margin = {
      top: 20,
      right: 20,
      bottom: 50,
      left: 50,
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var data = [10, 15, 20, 25, 30];
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var xscale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width - 100]);

  var yscale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([height / 2, 0]);

  var x_axis_bottom = d3.axisBottom().scale(xscale);
  var x_axis_top = d3.axisTop().scale(xscale);
  var y_axis_left = d3.axisLeft().scale(yscale);
  var y_axis_right = d3.axisRight().scale(yscale);

  svg.append("g").attr("transform", "translate(50, 30)").call(y_axis_left);

  svg
    .append("g")
    .attr("transform", "translate(" + (width - 50) + ", 30)")
    .call(y_axis_right)
    .style("color", "blue")
    .style("stroke", "blue");

  var xAxisTranslate = height / 2 + 30;

  svg
    .append("g")
    .attr("transform", "translate(50, " + xAxisTranslate + ")")
    .call(x_axis_bottom);

  svg
    .append("g")
    .attr("transform", "translate(50, 30)")
    .call(x_axis_top)
    .attr("color", "blue")
    .style("stroke", "blue");
};
