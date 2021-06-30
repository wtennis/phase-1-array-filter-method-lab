

function findMatching(array, driverName) {
   return array.filter(function (driver) { return driver.toUpperCase() === driverName.toUpperCase(); })
}

function fuzzyMatch(array, driverName) {
    return array.filter(function (driver) {return driver.charAt(0) === driverName.charAt(0)})
  }

  function matchName(array, driverName) {
    return array.filter(function (driver) { return driver.name === driverName; })
 }    
