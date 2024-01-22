//Date method


//displaying date

//toString()
//JavaScript will (by default) output dates using the toString() method.
{
    const d = new Date("02-13-2022");
    console.log(d);
    d.toString();
    console.log(d);
}

//toDateString()
//more readable format
//doesn't change the old date object. creates new date object
{
    const d = new Date();
    const newD = d.toDateString();
    console.log(newD);
}

//toUTCString()
{
    const d = new Date();
    const newD = d.toUTCString();
    console.log(newD);
}

//toISOString()
{
    const d = new Date();
    const newD = d.toISOString();
    console.log(newD);
}

//date get methods
/*
UTC Method	Same As	Description

getUTCDate()	            getDate()	            Returns the UTC date            (1-31)
getUTCFullYear()	        getFullYear()	        Returns the UTC year            (4 digit year)
getUTCMonth()	            getMonth()	            Returns the UTC month           (0-11)
getUTCDay()	                getDay()	            Returns the UTC day             (0-6, starts from sunday)
getUTCHours()	            getHours()	            Returns the UTC hour            (0-23
getUTCMinutes()	            getMinutes()	        Returns the UTC minutes         (0-59)
getUTCSeconds()	            getSeconds()	        Returns the UTC seconds         (0-59)
getUTCMilliseconds()	    getMilliseconds()	    Returns the UTC milliseconds    (0-999)
*/

{
    const d = new Date();
    console.log(d.getDate());
    console.log(d.getUTCDate());
    console.log(d.getFullYear());
    console.log(d.getUTCFullYear());
    console.log(d.getMonth());
    console.log(d.getUTCMonth());
    console.log(d.getDay());
    console.log(d.getUTCDay());
    console.log(d.getHours());
    console.log(d.getUTCHours()); //getHours and getUTCHours do not return same result
    console.log(d.getMinutes());
    console.log(d.getUTCMinutes());
    console.log(d.getSeconds());
    console.log(d.getUTCSeconds());
    console.log(d.getMilliseconds());
    console.log(d.getUTCMilliseconds());
}
{
    const d = new Date("2023-02-16");
    console.log(d);
    console.log(d.getDate());
    console.log(d.getUTCDate());
    console.log(d.getFullYear());
    console.log(d.getUTCFullYear());
    console.log(d.getMonth());
    console.log(d.getUTCMonth());
    console.log(d.getDay());
    console.log(d.getUTCDay());
    console.log(d.getHours());
    console.log(d.getUTCHours()); //getHours and getUTCHours do not return same result
    console.log(d.getMinutes());
    console.log(d.getUTCMinutes());
    console.log(d.getSeconds());
    console.log(d.getUTCSeconds());
    console.log(d.getMilliseconds());
    console.log(d.getUTCMilliseconds());
}

//getTime()
//The getTime() method returns the number of milliseconds since January 1, 1970
{
    const d = new Date();
    console.log(d.getTime());

    const d1 = new Date("2022-03-19");
    console.log(d1.getTime());
}


//Date.now()
//it is a static method of the date object

{
    console.log(Date.now());
}

//What is the difference between getTime and Date.now method
 /*           getTime()             |               Date.now()
         1. it is not static                    1. it is static    
         2. it can be applied on                2. it can't be applied on another date object
         another date object

*/

//how to calculate the numbers of years since 1970/01/01

//formula:
/*
Total milliseconds = total year * 1 year unit millisecond

total year = total millisecond/1 year unit millisecond
*/

{
    const secondMilliseconds = 1000;
    const minuteMilliseconds = secondMilliseconds * 60;
    const hourMillisecond = minuteMilliseconds * 60;
    const dayMillisecond = hourMillisecond * 24;
    const yearMillisecond = dayMillisecond * 365;

    let years = Math.round(Date.now()/yearMillisecond);
    console.log(years);
}

//getTimezoneOffset()

{
    const d = new Date();
    console.log(d.getTimezoneOffset()); //-360 means UTC time is 6 hours behind or my local time is 6 hours ahead
}