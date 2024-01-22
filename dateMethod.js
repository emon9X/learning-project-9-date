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

getUTCDate()	            getDate()	            Returns the UTC date
getUTCFullYear()	        getFullYear()	        Returns the UTC year
getUTCMonth()	            getMonth()	            Returns the UTC month
getUTCDay()	                getDay()	            Returns the UTC day
getUTCHours()	            getHours()	            Returns the UTC hour
getUTCMinutes()	            getMinutes()	        Returns the UTC minutes
getUTCSeconds()	            getSeconds()	        Returns the UTC seconds
getUTCMilliseconds()	    getMilliseconds()	    Returns the UTC milliseconds
*/

{
    const d = new Date();
    console.log(d.getDate())
}