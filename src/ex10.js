const getHFAgeCount = async () => {
    let heartfailurecsv =
      "https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv";

    // Object to hold ages
    let ageCount = [
      { label: "1-30", count: 0 },
      { label: "31-40", count: 0 },
      { label: "41-60", count: 0 },
      { label: "61-100", count: 0 },
    ];

    // Temp storage array for ages
    let arr = [];

    // Fetch data from csv
    const data = await d3.csv(heartfailurecsv);

    // Parse data and process ages into temp array
    data.forEach((entry) => {
      arr.push(entry.age);
    });

    // Divide ages into their own categories
    arr.forEach((entry) => {
      if (entry >= 1 && entry <= 30) {
        ageCount[0].count += 1;
      } else if (entry >= 31 && entry <= 40) {
        ageCount[1].count += 1;
      } else if (entry >= 41 && entry <= 60) {
        ageCount[2].count += 1;
      } else if (entry >= 61 && entry <= 100) {
        ageCount[3].count += 1;
      }
    });

    return ageCount;
  };

  // Exercise 10:

  const exercise10 = async () => {
    const ageCount = await getHFAgeCount();

    // Create HTML elements programatically
    for (var i = 0; i < 4; i++) {
      d3.select("body").append("p");
    }

    // Add data to paragraphs
    var p = d3
      .select("body")
      .selectAll("p")
      .data(ageCount)
      .text(function (d, i) {
        return d.label + ": " + d.count;
      });
  };