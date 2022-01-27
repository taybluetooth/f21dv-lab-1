const exercise7 = () => {
  // Create HTML elements programatically

  for (var i = 0; i < 4; i++) {
    d3.select("body").append("div");
  }

  let num = [10, 50, 100, 200];

  let paragraph = d3
    .select("body")
    .selectAll("div")
    .data(num)
    .text(function (d, i) {
      return "cont:" + d;
    })
    .style("color", function (d, i) {
      if (d >= 50 && d <= 100) {
        return "red";
      } else {
        return "yellow";
      }
      return "blue";
    });
};
