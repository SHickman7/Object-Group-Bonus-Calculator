// array of employee objects
const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

console.log("array of employee data: ", employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//
for (let employee of employees) {
  console.log(calculateIndividualEmployeeBonus(employee));
}

/*

to return

{
  name,
  bonusPercentage,
  totalcompensation,
  totalBonus
}
 */
// First - check if rating is below 2, if so dont alter income
// next - rating of 3 set bonus to 4%
// next - rating of 4 bonus to 6%
// next - rating of 5 bonus to 10%

// now - if employee number is 4 digits long - alter bonusPercentage.. add 5%

// if income greater than 65k - bonusPercentage adjusted down 1%
// double check bonusPercentage is not greater than 13% - if so set to 13%
// double check bonusPercentage is not less than 0% - if so set to 0%

// At this point we have bonusPercentage calculated. Now time to get income adjustments

// (bonusPercentage / 100) = e.g. (0.1 * income) = totalBonus
// totalBonus + comp = totalComp

function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  // return new object with bonus results
  let bonuses = {
    name: "",
    bonusPercentage: 0,
    totalcompensation: 0,
    totalBonus: 0,
  };

  bonuses.name = employee.name;
  const salary = Number(employee.annualSalary);

  if (employee.reviewRating <= 2) {
    bonuses.bonusPercentage = 0;
    bonuses.totalcompensation = salary;
    return bonuses;
  } else if (employee.reviewRating === 3) {
    bonuses.bonusPercentage = 4;
  } else if (employee.reviewRating === 4) {
    bonuses.bonusPercentage = 6;
  } else if (employee.reviewRating === 5) {
    bonuses.bonusPercentage = 10;
  }

  if (employee.employeeNumber.length === 4) {
    bonuses.bonusPercentage += 5;
  }

  if (employee.annualSalary >= 65000) {
    bonuses.bonusPercentage -= 1;
  }

  if (bonuses.bonusPercentage < 0) {
    bonuses.bonusPercentage = 0;
  }
  if (bonuses.bonusPercentage > 13) {
    bonuses.bonusPercentage = 13;
  }

  let bonusDecimal = bonuses.bonusPercentage / 100;
  let totalBonus = Math.round(salary * bonusDecimal);
  let totalcompensation = salary + totalBonus;

  bonuses.totalBonus = totalBonus;
  bonuses.totalcompensation = totalcompensation;

  return bonuses;
}
