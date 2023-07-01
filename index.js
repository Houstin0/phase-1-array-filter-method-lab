// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array,name) {
    return array.filter(
      function(driver) {
        if(driver.toLowerCase()===name.toLowerCase()){
            return driver
        }
      }  
    )
}

console.log(findMatching(drivers,"Bobby"));

function fuzzyMatch(array,query) {
    return array.filter(
        function(driver){
            if (driver.toLowerCase().startsWith(query.toLowerCase())) {
                return driver
            }
        }
    )
}

console.log(fuzzyMatch(drivers,"s"));

const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(array,query) {
    return array.filter(
        function(driver) {
            if(driver.name.toLowerCase()===query.toLowerCase()){
                return driver
            }
        }
    )
}

console.log(matchName(driverObjects,"bobby"));