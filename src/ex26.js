const plotPoints = (
  arr,
  pos,
  svg,
  xMax,
  yMax,
  type = "circle",
  color = "red"
) => {
  var symbol = d3.symbol();

  const xExtent = d3.extent(pos, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(pos, (d) => {
    return d.y;
  });

  // X Axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // Y Axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  svg
    .selectAll("dot")
    .data(pos)
    .enter()
    .append("path")
    .attr(
      "d",
      symbol.type(function (d) {
        if (type == "triangle") {
          return d3.symbolTriangle;
        } else {
          return d3.symbolCircle;
        }
      })
    )
    .attr("transform", function (d) {
      return "translate(" + x(d.x) + "," + y(d.y) + ")";
    })
    .style("fill", color);

  svg
    .selectAll("dot")
    .data(pos)
    .enter()
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + (x(d.x) - 2) + "," + (y(d.y) - 5) + ")";
    })
    .text(function (d, i) {
      return arr[i];
    })
    .attr("text-anchor", "middle")
    .style("fill", "black")
    .style("font-family", "sans-serif");
};

const exercise26 = async () => {
  // Set Dimensions
  const xSize = 600;
  const ySize = 600;
  const margin = 40;
  const xMax = xSize - margin * 2;
  const yMax = ySize - margin * 2;
  // Get the 'limits' of the data - the full extent (mins and max)
  // so the plotted data fits perfectly

  // Append SVG Object to the Page
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", xSize)
    .attr("height", ySize)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

  let arr = [10, 20, 40, 13, 23, 56, 90];
  let arr2 = [90, 30, 40, 432, 100, 390, 30, 200, 1289];

  // 1: Sine Wave
  // 2: Cosine Wave
  // 3: Tangent Wave
  arr = plotWave(arr, 1);
  arr2 = plotWave(arr2, 2);

  drawWave(arr, svg, xMax, yMax, "gold");
  drawWave(arr2, svg, xMax, yMax, "red");

  plotPoints(arr, svg, xMax, yMax);
  plotPoints(arr2, svg, xMax, yMax, "triangle", "blue");
};
