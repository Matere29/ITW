const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = Math.abs(leoBalance) + Math.abs(sarahBalance) 
console.log(owed)
const leo = leoName + "" + leoSurname + "owed:R"+ Math.abs(leoBalance).toFixed(2) + "\n"
const sarah = sarahName + "" + sarahSurname + "owed:R"+ Math.abs(sarahBalance).toFixed(2)+"\n"
const total = "Total amount owed: R" 
const result = leo + sarah + divider + divider+"\n" + total + owed +"\n" + divider + divider ;
Math.abs(result).toFixed(2)
console.log(result)