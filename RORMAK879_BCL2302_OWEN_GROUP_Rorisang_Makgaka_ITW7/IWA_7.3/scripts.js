const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = Math.abs(leoBalance) + Math.abs(sarahBalance) 
//used Math.abs() function to convert a strings to  positive numbers
console.log(owed)
const leo = leoName+ " " +leoSurname.trim() +" "+"owed:R"+ ""+Math.abs(leoBalance).toFixed(2)+"\n"
//I used to toFixed()method to round balance and total to decimal places
const sarah = sarahName.trim()+ " " +sarahSurname + " "+"owed:R"+ ""+Math.abs(sarahBalance).toFixed(2)+"\n"
const total = "Total amount owed: R" 
const result = leo + sarah + divider +"\n" + total + owed.toFixed(2) +"\n" + divider;
console.log(result)