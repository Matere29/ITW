const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

//changed a string to a number and multiplied by salary to get tax amount
const taxAsDecimal = parseInt(tax[913]) / '100' * salary ;
//Calculate salary after deducting tax amount.
const startingAfterTax = salary * 1 - taxAsDecimal;
//concatinating two strings
const type = lodging +" "+ size;
//fixed this equation by subtracting expenses from new Salary(Salary without tax)
const balance = (startingAfterTax - expenses.transport - expenses.food - rent["large-apartment"]).toFixed(2);
console.log('R',balance,type);
