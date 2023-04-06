// Write functions with the filter() method so that PickMeUp Taxi service employees can easily query the data. 
//[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

//findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() == name.toUpperCase())
}

// fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.charAt(0) == name.charAt(0))
}

// This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, stringArgument) {
    return drivers.filter(driver => driver.name === stringArgument)
}

