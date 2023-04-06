const nickname= 'Timmy';
const firstname = 'Timothy';

/*I used if statements to check for nickname and display message
* If nickname is null, display firstname and if both are null display Good Morning
*/


if(nickname){
 console.log("Good morning!",nickname)
}else if(firstname){
    console.log("Good Morning!",firstname)
}else{
    console.log("Good morning!")
}



//console.log("Good Morning, ${nickname} || {firstname}!")
