//JavaScript Date Formats

// ISO Dates
// ISO 8601 is the international standard for the representation of dates and times.
// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
{
    const d = new Date("2015-03-25"); //gives date with local time
    console.log(d);
    const d1 = new Date("2015-03");
    console.log(d1);
    const d2 = new Date("2015"); //string year
    const d3 = new Date(2015); //number millisecond
    console.log(d2);
    console.log(d3);
}

//ISO Dates (Date-Time)
{
    const d = new Date("2015-03-25T12:00:00Z"); // Z = UTC time 
    console.log(d);
    //why output is 18:00:00
    //Input time is 12:00:00
    //local time offset +6:00
    //so output is 12:00:00+06:00:00 = 18:00:00 
}
//ISO Dates (Date-Time) with local time offset
{
    const d = new Date("2015-03-25T12:00:00-06:00");
    //-06:00:00; this time offset means the provided time is behind 6 hours. So UTC or GMT time is 12+6 = 18:00:00
    //Again Bangladesh Standard Time offset is +06:00:00. Finally the time is 18+6=24
    console.log(d);
}

//Omitting T or Z in a date-time string can give different results in different browsers.
{
    const d = new Date("2015-03-25 12:00:00");
    console.log(d);
}

//JavaScript short Dates
{
    const d = new Date("03/25/2015"); //local time not adjusted
    console.log(d);

    //In some browsers, months or days with no leading zeroes may produce an error
    const d1 = new Date("2015-3-25");
    console.log(d1);

    const d2 = new Date("2015/03/25");
    const d3 = new Date("25-03-2015");

}

//JavaScript Long Dates.

{
    const d = new Date("Mar 25 2015");
    const d1 = new Date("25 Mar 2015");
    const d3 = new Date("JANUARY, 25, 2015");

}