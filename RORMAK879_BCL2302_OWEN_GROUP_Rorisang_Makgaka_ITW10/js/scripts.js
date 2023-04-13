const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9
// Do not change code above this comment

//checks whether item has been assigned to 9 and display message
console.log(holidays[9],'ID '+ futureId + ' not created yet');

//Created an object named copied
const copied = {

    holidays: christmas,
    name: 'X-mas Day',
    //date: new Date(`25 December ${currentYear} 00:00`),

    correctDate: {
        hours:'00',
        minutes:'00',
    }

}

//copied = holidays.christmas
//copied = { name: 'X-mas Day' }
correctDate = copied.date
//correctDate.hours = 00
//correctDate.minutes= 00
isEarlier = copied.correctDate< holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = copied.correctDate
console.log('ID change:', holidays[6].id != copied.id || copied.id)
console.log('Name change:', copied.name)
console.log('Date change:', copied.correctDate.hours,':', copied.correctDate.minutes)

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)
const date  = new Date()
const firstDay = firstHolidayTimestamp.date.getDate()
const firstMonth = firstHolidayTimestamp.date.getMonth()
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

let randomHoliday = holidays[Math.random]
console.log(randomHoliday.Date)
