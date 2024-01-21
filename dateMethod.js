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