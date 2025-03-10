document.addEventListener("DOMContentLoaded", ()=>{
   const button = document.querySelector("#btn")


button.addEventListener('click', ()=>{
const dateOfBirth = document.querySelector("#dob").value;

if(dateOfBirth ===""){
    const result = document.getElementById('result');
    result.textContent = `Invalid input! Please enter a valid input.`
    result.style.color = 'red';
}
else{
    const dob = new Date(dateOfBirth);
const dobvalue = dob.toLocaleDateString();

const newDateArray = dobvalue.split("/")
console.log(newDateArray);


const currentDate = new Date();
const currentDateVal = currentDate.toLocaleDateString()
const currentDateArray = currentDateVal.split("/");
console.log(currentDateArray);

   const currentYear = parseInt(currentDateArray[2]) 
   const prevYear = parseInt(newDateArray[2])

   const currentMonth = parseInt(currentDateArray[0]) 
   const prevMonth = parseInt(newDateArray[0])

   const currentDay = parseInt(currentDateArray[1]) 
   const prevDay = parseInt(newDateArray[1])
   const result = document.getElementById('result');

if(currentMonth>=prevMonth){
    if(currentDay>=prevDay){
    let month = currentMonth - prevMonth;
    let year = currentYear - prevYear;
    let day = currentDay-prevDay;
if(day>=30){
    month+=1;
    day = 0;
}
   result.textContent = `Your age is ${year} years and ${month} months and ${day} days.`
}}
   else if(prevDay>=currentDay){
    if(prevMonth>=currentMonth){
let day = (currentDay+30)-prevDay;
let month = (currentMonth+11)-prevMonth;
let year = currentYear - (prevYear+1);
    
if(day>=30){
    month+=1;
    day = 0;
}
   result.textContent = `Your age is ${year} years and ${month} months and ${day} days.`
   ;}
else{
    let day = (currentDay+30)-prevDay;
let month = (currentMonth)-(prevMonth+1);
let year = currentYear - (prevYear+1);

if(day>=30){
    month+=1;
    day = 0;
}

   result.textContent = `Your age is ${year} years and ${month} months and ${day} days.`
}
}


}
})

});
