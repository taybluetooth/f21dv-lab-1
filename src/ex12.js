const exercise12 = async () => {
  let svgcsv =
    "https://raw.githubusercontent.com/taybluetooth/f21dv-lab-1/main/csv/ex12.csv";
  let arr = [];

  const csv = await d3.csv(svgcsv);

  csv.forEach((data) => {
    arr.push({
      shape: data.shape,
      dim: data.dim,
      position: data.position,
      color: data.color,
    });
  });

  console.log(arr);

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", "1px solid green");

  let dim = [];
  let pos = [];

  arr.forEach((entry) => {
    switch (entry.shape.toLowerCase()) {
      case "circle":
        dim = entry.dim.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("cx", dim[0])
          .attr("cy", dim[1])
          .attr("r", entry.position);
        break;
      case "ellipse":
        dim = entry.dim.split(",");
        pos = entry.position.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("cx", dim[0])
          .attr("cy", dim[1])
          .attr("rx", pos[0])
          .attr("ry", pos[1]);
        break;
      case "line":
        dim = entry.dim.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("x1", dim[0])
          .attr("y1", dim[1])
          .attr("x2", dim[2])
          .attr("y2", dim[3]);
        break;
      case "rect":
        dim = entry.dim.split(",");
        pos = entry.position.split(",");
        svg
          .append(entry.shape)
          .attr("stroke", entry.color)
          .attr("fill", entry.color)
          .attr("x", pos[0])
          .attr("y", pos[1])
          .attr("width", dim[1])
          .attr("height", dim[0]);
        break;
    }
  });
};
