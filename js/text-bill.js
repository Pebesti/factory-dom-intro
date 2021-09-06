// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");

//get a reference to the callTotalOne
const callsTotalElem = document.querySelector(".callTotalOne");

//get a reference to the smsTotalOne
const smsTotalElem = document.querySelector(".smsTotalOne");

//create a variable that will keep track of the total bill
const totalCostElem = document.querySelector(".totalOne");

//create varibles that will keep track of the total calls and sms
var callsTotal = 0;
var smsTotal = 0;

function text_bills(){

    function text_sms(){
        smsTotal+=0.75;
    }
    function text_call(){
        callsTotal+=2.75;  
    }
    function tottal(){
return (smsTotal+callsTotal).toFixed(2);
    }

    function call_total(){
        return callsTotal.toFixed(2);
    }
    function sms_total(){
        return smsTotal.toFixed(2);
    }
function action(val){
    if(val==="call"){
        text_call();
    }
    else if(val==="sms"){
       text_sms();
    }
}
    return{
        tottal,
        call_total,
action,
sms_total,
text_call,
text_sms
    }
}
    const textBills = text_bills();
    callsTotalElem.innerHTML = textBills.call_total();
    smsTotalElem.innerHTML = textBills.sms_total();
    totalCostElem.innerHTML = 0;
//add an event listener for when the add button is pressed
textTotalAddBtn.addEventListener("click",function(){
textBills.action(billTypeText.value);
var totalCost = textBills.tottal();
//update the totals that is displayed on the screen.
callsTotalElem.innerHTML = textBills.call_total();;
    smsTotalElem.innerHTML = textBills.sms_total();
    totalCostElem.innerHTML = totalCost;

//color the total based on the criteria
    if (totalCost >= 50){
// adding the danger class will make the text red
        totalCostElem.classList.add("danger");
        }
    else if (totalCost >= 30){
            totalCostElem.classList.add("warning");
        }
});

