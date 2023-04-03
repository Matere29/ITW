const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0


/* let customers = '1'; */
let location = 'RSA';
let currency = 'R';
let shipping = 0;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED; 


if (location === 'RSA') { 
    shipping = 400 
    currency == 'R';
 }

else if (location === 'NAM'){
    shipping = 600 
    currency='$'
}
else {
    shipping = 800
}







/* if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}
 */
/* if (shipping = 0 && customers !== 1) { 
    console.log(WARNING) 
}
 */
if (location === "NK"){
    console.log(BANNED_WARNIN)
}
else{
    console.log('price', currency, shoes + batteries + pens + shirts + shipping)
}