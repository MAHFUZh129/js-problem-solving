//Question No. 1
function describeValue(value) {

    let type = typeof (value)

    let truthyOrFalsy = Boolean(value) ? 'truthy' : 'falsy'

    return `"${type} | ${truthyOrFalsy}"`

}




//Question No. 2
function getDayType(day) {

    let dayInLowerCase = day.toLowerCase();

    if (dayInLowerCase === 'friday' || dayInLowerCase ==='saturday'){

        return "Weekend"
    }
    else if (dayInLowerCase === 'sunday' || dayInLowerCase ==='monday' ||dayInLowerCase === 'tuesday' || dayInLowerCase ==='wednesday' ||dayInLowerCase === 'thursday'){

        return "Working Day"

    }
    else{ return "Invalid Day" }   

}



//Question No. 3












//Question No. 4
//Question No. 5
