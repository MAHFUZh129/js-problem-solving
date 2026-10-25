//Question No. 1
function describeValue(value) {

    let type = typeof (value)

    let truthyOrFalsy = Boolean(value) ? 'truthy' : 'falsy'

    return `"${type} | ${truthyOrFalsy}"`

}

describeValue(null)




//Question No. 2
function getDayType(value) {

    let valueInLowerCase = value.toLowerCase();

    if (valueInLowerCase === 'friday' || valueInLowerCase ==='saturday'){

        return "Weekend"
    }
    else if (valueInLowerCase === 'sunday' || valueInLowerCase ==='monday' ||valueInLowerCase === 'tuesday' || valueInLowerCase ==='wednesday' ||valueInLowerCase === 'thursday'){

        return "Working Day"

    }
    else{ return "Invalid Day" }   

}

getDayType('MONDAY')

console.log()





//Question No. 3
//Question No. 4
//Question No. 5
