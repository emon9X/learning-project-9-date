//set date methods are used for setting a part of a date

/*
Method	            Description

setDate()	        Set the day as a number (1-31)
setFullYear()	    Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	    Set the minutes (0-59)
setMonth()	        Set the month (0-11)
setSeconds()	    Set the seconds (0-59)
setTime()	        Set the time (milliseconds since January 1, 1970)
*/


{
    const d = new Date();
    d.setDate(2);
    console.log(d);
}
{
    const d = new Date();
    d.setFullYear(2022);
    console.log(d);
    d.setFullYear(2020, 11, 3); //can take month and day optionally
    console.log(d);
}
{
    const d = new Date();
    d.setHours(2);
    console.log(d);
}