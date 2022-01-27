const exercise2 = () => {
  // Create HTML elements programatically
  // Classed adds class selector to element
  d3.select("body").append("p").classed("p1", true).text("First paragraph");
  d3.select("body").append("p").text("Second paragraph");

  d3.selectAll("p")
    .style("color", "blue")
    .style("font-size", "20px")
    .style("font-family", "sans-serif")
    .style("line-height", "8px");

  d3.select(".p1").style("text-decoration", "underline");
};
