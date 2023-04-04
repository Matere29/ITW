const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
//added brackets

if(hourOfDay && (minuteOfDay !== null)){
   if((hourOfDay == 0) && (minuteOfDay == 0) ){
	const taxAsDecimal = tax / '100';
   console.log(taxAsDecimal);
   const startingAfterTax = salary - taxAsDecimal;
   let balance = startingAfterTax - transport - food - rent;
}}


console.log('R',balance.toFixed(2)) ;

	
