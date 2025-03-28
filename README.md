The calendar is as an ES6 module purely made with HTML Javascript and CSS.


sample=> 

//call the library
const {YearlyCalendar} = await import(`./YearlyCalendar/YearlyCalendar.js`)

//set the HTML destination element
const target = "#calendarCtn"     

//set starting year 
const year = new Date().getFullYear()   

//fire class and set size (compact/full/small) and container width(optional)
const calendar = new YearlyCalendar({year:year, size:"compact", ctnWidth:"300px"})   

//define variable for target
const target_ = document.querySelector(target)  

//run init() to get HTML
target_.innerHTML = calendar.init()   

//run events() to enable year change
calendar.events()                                                           



url can accept get GET parameters like ?year=2025
If you click on the year (its an input field) and change the value (by pressing ENTER/RETURN or focus out) the lib restarts with the new date.


Additional dependencyes:
$_GET and Date folders.
Both can be used individually.

I make the readme for them later (probably never...).# yearCalendar
