let jeffMass =50
let jeffHeight = 25
let toddMass  = 45
let toddHeight = 30
let jeffBMI
let toddBMI
 
jeffBMI = jeffMass/(jeffHeight*jeffHeight)
toddBMI = toddMass/(toddHeight*toddHeight)
console.log(jeffBMI)
console.log(toddBMI)
 
let jeffHigherBMI = jeffBMI > toddBMI;


 
if(jeffBMI > toddBMI){
  console.log('Jeffs BMI is higher than Todds');
}
else {
  console.log('Todds BMI is bigger than Jeffs');
}