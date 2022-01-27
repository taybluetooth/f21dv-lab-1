const exercise8 = () => {
  var myData = ["a", 4, 1, "b", 6, 2, 8, 9, "z"];

  var p = d3
    .select("body")
    .selectAll("span")
    .data(myData)
    .enter()
    .append("span")
    .style("color", function (d, i) {
      // JS has no char type
      // Will check if string and length 1
      if (typeof d == "string" && d.length == 1) {
        return "blue";
      } else if (typeof d == "number") {
        return "green";
      }
    })
    .text(function (d, i) {
      return d;
    });
};
