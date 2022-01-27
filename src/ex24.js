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

const exercise24 = async () => {
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

  // Get File
  let url =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/ex23.csv";

  let arr = [];
  let arr2 = [];

  const csv = await d3.csv(url);

  csv.forEach((data) => {
    arr.push(data.value);
    arr2.push(data.value);
  });

  // 1: Sine Wave
  // 2: Cosine Wave
  // 3: Tangent Wave
  arr = plotWave(arr, 3);
  arr2 = plotWave(arr2, 2);

  drawWave(arr, svg, xMax, yMax, "gold");
  drawWave(arr2, svg, xMax, yMax, "red");
};
