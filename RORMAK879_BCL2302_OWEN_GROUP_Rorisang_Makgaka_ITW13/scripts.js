let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const  logCalc = () => { 
    const isString = typeof calculated == 'numerical-string' 
    //changed parseNumber into parseInt because parseNumber is not defined
    const calculatedAsNumber = isString ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1 
}
//function logCalc returns calculated value

const  calcUser = () => {
    //called logCalc function and parsed calculated values inside it to check which category calculated value falls into
  logCalc(calculated)
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()