const {YearlyCalendar} = await import(`./YearlyCalendar/YearlyCalendar.js`)
const target = "#calendarCtn" 
const year = new Date().getFullYear()
const calendar = new YearlyCalendar({year:year,size:"compact"})
const target_ = document.querySelector(target)
target_.innerHTML = calendar.init()
calendar.events()

