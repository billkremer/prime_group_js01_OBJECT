var atticus = {
  employeeName: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3,
};
var jem = {
  employeeName: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4,
};
var boo = {
  employeeName: 'Boo',
  employeeNumber: '11435',
  annualSalary: '54000',
  reviewRating: 3,
};
var scout = {
  employeeName: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5,
};
var robert = {
  employeeName: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1,
};
var mayella = {
  employeeName: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 2,
};

var employees = [atticus, jem, boo, scout, robert, mayella];



for (var i = 0; i < employees.length; i++) {

console.log(bonusCalculator(employees[i]));
}



function bonusCalculator(nameOfEmployee) {
var nameCashMoneyBonus = {
  employeeName: nameOfEmployee.employeeName,
  bonusPercentage: 0,
  adjustAnnualCompensation: 0,
  totalBonus: 0,

}

  switch (nameOfEmployee.reviewRating) {
    case 3:
      nameCashMoneyBonus.bonusPercentage = 0.04;
      break;
    case 4:
      nameCashMoneyBonus.bonusPercentage = 0.06;
      break;
    case 5:
      nameCashMoneyBonus.bonusPercentage = 0.1;
      break;
    default:
      nameCashMoneyBonus.bonusPercentage = 0;
  }

  if (nameOfEmployee.employeeNumber.length == 4) {
    nameCashMoneyBonus.bonusPercentage +=0.05;
  }

  if (nameOfEmployee.annualSalary > 65000) {
    nameCashMoneyBonus.bonusPercentage -= 0.01;
  }

  if (nameCashMoneyBonus.bonusPercentage > 0.13) {
    nameCashMoneyBonus.bonusPercentage = 0.13;
  } else if (nameCashMoneyBonus.bonusPercentage < 0) {
    nameCashMoneyBonus.bonusPercentage = 0;
  }

nameCashMoneyBonus.totalBonus = nameOfEmployee.annualSalary * nameCashMoneyBonus.bonusPercentage;

nameCashMoneyBonus.adjustAnnualCompensation = Number(nameOfEmployee.annualSalary) + nameCashMoneyBonus.totalBonus;

return nameCashMoneyBonus;
}
