const drawAxis = (svg, x, y, yMax) => {
  // bottom
  svg
    .append("g")
    .attr("transform", "translate(0," + yMax + ")")
    .call(d3.axisBottom(x))
    .attr("color", "green"); // make bottom axis green

  // top
  svg.append("g").call(d3.axisTop(x));

  // left y axis
  svg.append("g").call(d3.axisLeft(y));

  // right y axis
  svg
    .append("g")
    .attr("transform", `translate(${yMax},0)`)
    .call(d3.axisRight(y));
};

const plotWave = (data, type) => {
  const output = [];
  const numPoints = data.length > 0 ? data.length : 100;

  const plot = (type, value) => {
    switch (type) {
      case 1:
        return Math.sin(value);
      case 2:
        return Math.cos(value);
      case 3:
        return Math.tan(value);
    }
  };
  for (let i = 0; i < numPoints; i++) {
    output.push({
      x: i / numPoints,
      y: plot(type, data.length > 0 ? data[i] : (6.2 * i) / 100),
    });
  }
  return output;
};

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

const drawWave = (arr, svg, xMax, yMax, color = "steelblue") => {
  const xExtent = d3.extent(arr, (d) => {
    return d.x;
  });
  const yExtent = d3.extent(arr, (d) => {
    return d.y;
  });

  // X Axis
  const x = d3.scaleLinear().domain([xExtent[0], xExtent[1]]).range([0, xMax]);

  // Y Axis
  const y = d3.scaleLinear().domain([yExtent[0], yExtent[1]]).range([yMax, 0]);

  drawAxis(svg, x, y, yMax);

  // Add the line
  svg
    .append("path")
    .datum(arr)
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.x);
        })
        .y(function (d) {
          return y(d.y);
        })
    );
};

const exercise27 = () => {
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
  pos = plotWave(arr, 1);

  drawWave(pos, svg, xMax, yMax, "gold");

  plotPoints(arr, pos, svg, xMax, yMax);
};
