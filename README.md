The calendar is as an ES6 module purely made with HTML Javascript and CSS.


sample=> 

const {YearlyCalendar} = await import(`./YearlyCalendar/YearlyCalendar.js`) //call the library
const target = "#calendarCtn"                                               //set the HTML destination element
const year = new Date().getFullYear()                                       //set starting year 
const calendar = new YearlyCalendar({year:year,size:"compact"})             //fire class and set size. compact/full
const target_ = document.querySelector(target)                              //define variable for target
target_.innerHTML = calendar.init()                                         //run init() to get HTML
calendar.events()                                                           //run events() to enable year change



url can accept get GET parameters like ?year=2025
If you click on the year (its an input field) and change the value (by pressing ENTER/RETURN or focus out) the lib restarts with the new date.


Additional dependencyes:
$_GET and Date folders.
Both can be used individually.

I make the readme for them later (probably never...).# yearCalendar
