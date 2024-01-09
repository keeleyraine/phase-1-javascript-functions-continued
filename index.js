function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

let mondayWork = function(action="go to the office") {
    return `This Monday, I will ${action}.`;
}
mondayWork()

function wrapAdjective (style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}