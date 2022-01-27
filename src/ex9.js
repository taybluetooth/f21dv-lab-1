const exercise9 = async () => {
  const titaniccsv =
    "https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv";
  const titles = [
    { title: "Mr.", num: 0 },
    { title: "Master.", num: 0 },
    { title: "Mrs.", num: 0 },
    { title: "Miss.", num: 0 },
  ];

  const genders = [
    { sex: "Male", num: 0 },
    { sex: "Female", num: 0 },
  ];

  const data = await d3.csv(titaniccsv);

  // Count titles
  data.forEach((entry) => {
    titles.forEach((count) => {
      if (entry.Name.includes(count.title)) {
        count.num++;
      }
    });
  });

  // Count genders
  data.forEach((entry) => {
    genders.forEach((count) => {
      if (entry.Sex === count.sex.toLowerCase()) {
        count.num++;
      }
    });
  });

  // Print titles
  titles.forEach((count) => {
    console.log(count.title + ": " + count.num);
  });

  // Print genders
  genders.forEach((count) => {
    console.log(count.sex + ": " + count.num);
  });
};
