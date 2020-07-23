'use strict'

let teamHeathAvg =  (89 + 120 + 103) / 3;
let teamZaneAvg =  (116 + 94 + 123) / 3;


console.log('Heath team Average: ' + teamHeathAvg)
console.log('Zane team Average:' + teamZaneAvg)

if(teamHeathAvg>teamZaneAvg){
    console.log('Heath team is the winner and the average score is : ' + teamHeathAvg)
}else{
    console.log('Zane team is the winner and the average score is : ' + teamZaneAvg )
}

console.log('--------------------')

let teamMariahAvg =  (97 + 134 + 105) / 3;
console.log('Mariah team Average: ' + teamMariahAvg)

if (teamHeathAvg > teamZaneAvg  && teamHeathAvg > teamMariahAvg) {   
    console.log('Heath team is winning') }
else if (teamZaneAvg > teamHeathAvg && teamZaneAvg > teamMariahAvg) { 
    console.log('Zane team is winning') }
else if ( teamMariahAvg > teamHeathAvg &&  teamMariahAvg > teamZaneAvg) {
     console.log('Mariah team is winning') }
else if (teamHeathAvg === teamZaneAvg  && teamHeathAvg > teamMariahAvg) {  
     console.log('Heath team and Zane team have a tie.') }
else if (teamHeathAvg === teamMariahAvg && teamHeathAvg > teamZaneAvg ) {  
     console.log('Heath team and Mariah team have a tie.') }
else if (teamZaneAvg === teamMariahAvg && teamMariahAvg > teamHeathAvg ) { 
  console.log('Zane team and Mariah team have a tie.') }
else { console.log('There is a tie between all of them. \n\n') }



