const exercise3 = () => {
  for (var i = 0; i < 10; i++) {
    if (i < 5) {
      d3.select("body")
        .append("div")
        .text(i + 1)
        .style("color", "red");
    } else if (i >= 5) {
      d3.select("body")
        .append("div")
        .text(i + 1)
        .style("color", "green");
    }
  }
};
