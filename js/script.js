// console.log('Hello'); //test

/* 
***TASK:
1. Ask first name
2. Ask last name
3. Ask favorite color
4. Merge information and add "21" to create password
5. Show password
*/

// .1
var firstName = prompt('What\'s your first name?');
// console.log(firstName); //test
// console.log(typeof (firstName)); //test

// .2
var lastName = prompt('What\'s your last name?');
// console.log(lastName); //test
// console.log(typeof (lastName)); //test

// .3
var favoriteColor = prompt('What\'s your favorite color?');
// console.log(favoriteColor); //test
// console.log(typeof (favoriteColor)); //test

// .4
var password = firstName + lastName + favoriteColor + '21';
// console.log(password); //test
// console.log(typeof (password)); //test

// .5
document.getElementById('view-password').innerHTML = password;