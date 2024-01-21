//what is date object

const date = new Date();
console.log(date); //output: Sun Jan 21 2024 11:42:59 GMT+0600 (Bangladesh Standard Time)
const d = new Date("2022-03-22"); //output: Tue Mar 22 2022 06:00:00 GMT+0600 (Bangladesh Standard Time)
console.log(d);

// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not
//By default, JavaScript will use the browser's time zone and display a date as a full text string

//creating date object
// Date objects are created with the new Date() constructor.
// There are 9 ways to create a new date object:
/*
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

//new Date()
//creates a date object with the current date and time
{
    const d = new Date();
    console.log(d);
}

//new Date(date string)
{
    const d = new Date("february 13, 2022");
    console.log(d);
    const d1 = new Date("2022-02-13");
    console.log(d1);

    //"february 13, 2022"  vs   "2022-02-13"      vs     "02-13-2022"
    // gives time 00:00:00 | gives time 06:00:00   |  gives time 00:00:00

    const d2 = new Date("13-02-2022");//DD-MM-YYYY is invalid format
    console.log(d2);
    const d3 = new Date("02-13-2022");//MM-DD-YYYY is valid format
    console.log(d3);
    const d4 = new Date("13 february, 2022");
    console.log(d4);
}

//new Date(year,month,day,hours,minutes,seconds,ms)
//JavaScript counts months from 0
{
    const d = new Date(2022, 1, 13, 16, 55, 55, 999);
    console.log(d);
    const d1 = new Date(2022, 1, 13);
    console.log(d1);
}

//Overflow
{
    const d = new Date(2022, 13, 30); //december = 11, february(next year) = 13, 30 days (28 February + 2 March)
    console.log(d);
}

//Previous century
{
    const d = new Date(22, 11, 30); //first argument should be less than 3 digits. then js will interpret the argument as previous century
    console.log(d);
}

// new Date(millisecond)
// JavaScript stores dates as number of milliseconds since January 01, 1970.
// Zero time is January 01, 1970 00:00:00 UTC.
// One day (24 hours) is 86 400 000 milliseconds.
{
    const d = new Date(1000);// 1s = 1000ms
    console.log(d); //adds 6 hours for bangladesh standard time
}