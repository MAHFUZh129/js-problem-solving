//Question No. 1
function describeValue(value) {

    let type = typeof (value)

    let truthyOrFalsy = Boolean(value) ? 'truthy' : 'falsy'

    return `${type} | ${truthyOrFalsy}`

}





//Question No. 2
function getDayType(day) {

    let dayInLowerCase = day.toLowerCase();

    if (dayInLowerCase === 'friday' || dayInLowerCase === 'saturday') {

        return "Weekend"
    }
    else if (dayInLowerCase === 'sunday' || dayInLowerCase === 'monday' || dayInLowerCase === 'tuesday' || dayInLowerCase === 'wednesday' || dayInLowerCase === 'thursday') {

        return "Working Day"

    }
    else { return "Invalid Day" }

}



//Question No. 3
function validateUsername(name) {

    if (name.length < 4) {

        return "Too Short"
    }

    if (name.includes(' ')) return "No Space Allowed"

    if (name.toLowerCase().includes('admin')) {

        return "Reserved Word"

    } else { return "Available" }
}



//Question No. 4
function getCngFare(distance, isNight, waitingMinutes) {

    let fare = 50

     if(distance > 2){
        fare = fare + (distance -2) * 15
    }

        fare = fare + waitingMinutes * 2


    if(isNight){
        fare = fare + fare * 0.2

    }


   

    return fare
   
}



//Question No. 5
function getChaseVerdict(target, scored, ballsLeft){
    let runsNeeded = target - scored

    if(runsNeeded <= 0)  return "Won"
    if(ballsLeft <= 0)   return "Lost"

    let requiredRate = (runsNeeded / ballsLeft) * 6

    if(requiredRate <=6) return `Need ${runsNeeded}runs in ${ballsLeft} balls | Comfortable`
    

    if(requiredRate > 6 && requiredRate <=12) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`

    if(requiredRate >12) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible` 

}

