
//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
 return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation == []){
    return null
  }
  else{
  let object = {defender:formation[0],midfield:formation[1],forward:formation[2]};
  return object;
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
    var arr = [];
    players.forEach((player) => {
      if (player.debut == year) {
        arr.push(player);
      }
    });
    return arr;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var arr = [];
  players.forEach((element) => {
    if (element.position == position) {
      arr.push(element);
    }
  });
  return arr;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var arr = [];
  players.forEach((player) => {
    for(let j=0;j<player.awards.length;j++){
      if (player.awards[j].name == awardName) {
        arr.push(player);
      }
    }
   
  });
  return arr;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let arr = [];
  let count = 0;
  players.forEach( (player) => {
    for(let i=0;i<player.awards.length;i++){
      if(player.awards[i].name == awardName){
        count++;
      }
    }
    if(count == noOfTimes){
      arr.push(player);
    }
    count=0;
  });
  return arr;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let arr=[];
  let flag=0;
  players.forEach( (player) => {
  
    if(player.country == country){
      for(let i=0;i<player.awards.length;i++){
        if(player.awards[i].name == awardName){
            flag=1;
            arr.push(player);
            break;
        }
      }
    }
  });
  if(flag==1){
    return arr;
  }
  else{
    return []
  }
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var arr=[];
  players.forEach((player) => {
    if(player.awards.length <= noOfAwards && player.team == team && player.age<age){
      arr.push(player);
    }
  });
  return arr;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  players.sort(function(a,b){
    return b.age - a.age
  });
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let arr=[];
  let sortedArray = [];
  players.forEach( (player) => {
   if(player.team == team){
     arr.push(player);
   }
  });
  sortedArr = arr.sort(function(a,b){
    b.awards.length - a.awards.length;
  });
  return sortedArr;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
