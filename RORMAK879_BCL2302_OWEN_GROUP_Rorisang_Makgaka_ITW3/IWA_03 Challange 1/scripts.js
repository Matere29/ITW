// scripts.js
/**Importing variables */
import {company} from './configuration.js'
import {year} from './configuration.js'

//a function for displaying information on html page
console.log(company,year)
const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message 