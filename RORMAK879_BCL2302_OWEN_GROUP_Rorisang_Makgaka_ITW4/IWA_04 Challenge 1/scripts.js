const date = new Date()
let status = "student"
let count = 0

if (date == 2050) {
	
	 count = count + 4
	 let status = "student"
	 date = date.getMonth() + 1

	if ( status = "student") {
	  console.log("June", 'Youth Day')
	  count = count + 1
  }


	 count = count + 3
	 date = date.getMonth() + 1
	if (status === "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	
	 count = count + 1
}

    console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')

	//date = 'April'
	
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')

	console.log("August", 'Women’s Day')
	console.log("September", 'Heritage Day')
	//date = 'December'
	
	console.log(date, 'Day of Reconciliation')
	console.log(date, 'Day of Goodwill')


console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)