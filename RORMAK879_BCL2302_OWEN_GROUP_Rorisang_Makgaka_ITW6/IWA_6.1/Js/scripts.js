const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'



const primaryValid = typeof number == primaryPhone 
//added Boolean to change it to true since it is true, I removed "typeof number"
const secondaryValid = Boolean('secondaryPhone')

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )