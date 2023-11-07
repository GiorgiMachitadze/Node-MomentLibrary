const moment = require("moment");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter the start date (YYYY-MM-DD): ", (startDate) => {
  readline.question("Enter the end date (YYYY-MM-DD): ", (endDate) => {
    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);

    if (startDateMoment.isValid() && endDateMoment.isValid()) {
      const diffInDays = endDateMoment.diff(startDateMoment, "days");
      console.log(`Diff: ${diffInDays} days`);
    } else {
      console.log("Invalid date format. Please use YYYY-MM-DD.");
    }

    readline.close();
  });
});
