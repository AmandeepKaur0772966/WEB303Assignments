/*
	WEB 303
	Starting file for Assignment 1 
	{Amandeep Kaur (0772966)}
*/

const budgetCalc = (salary, percent) => {
  var gadgetBudget = (parseFloat(salary) * parseFloat(percent)) / 100;
  var result = "$" + gadgetBudget.toFixed(2).toString();

  return result;
};

$(document).ready(function () {
  $("#salary, #percent").change(function () {
    $("#spend").text(budgetCalc($("#salary").val(), $("#percent").val()));
  });
});
