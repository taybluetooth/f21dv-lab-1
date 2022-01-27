const exercise4 = () => {
  d3.selectAll("div")
    .filter(function () {
      return d3.select(this).text() == 1;
    })
    .text("Start")
    .style("color", "purple");
};
