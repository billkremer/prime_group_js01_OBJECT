# Bonus Calculator App

You are going to write a single JavaScript file to automatically calculate employee bonus for a company.

## Data Structure

The company is providing you with a few sample objects that serve as examples of how their data is currently being stored. And each of these objects are stored in a main array named `employees`, which is much like an entire sheet of one spreadsheet.

## Logic
Write a calculator function that takes in *one* employee object (as an argument to the function), and returns an object that represents the result:

* The first key should also contain the employee's name.
* The second key should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
* The third key should be the adjusted annual compensation (base annual + bonus)
* The fourth key should be the employee's total bonus rounded to the nearest dollar.

Finally, iterate over the `employees` array and

* use each `employee` object as input to your calculator function
* `console.log` the results of each iteration

### Individual Bonus calculation
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If they have an employee number with four digits, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% or below 0% total.

NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.
