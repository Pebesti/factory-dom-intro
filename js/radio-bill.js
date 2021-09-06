//get a reference to the sms or call radio buttons
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//get a reference to the callTotal
const callsTotalTwoElem = document.querySelector(".callTotalTwo");
//get a reference to the smsTotal
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
//get a reference to the totalElement
const totalCostTwoElem = document.querySelector(".totalTwo");
var call =0;
var sms =0;

function radio_bills(){

    function radio_button_sms(){
        sms+=0.75;
    }
    function radio_button_call(){
        call+=2.75;  
    }
    function tottal(){
return (sms+call).toFixed(2);
    }

    function callTotal(){
        return call.toFixed(2);
    }
    function smsTotal(){
        return sms.toFixed(2);
    }
function action(val){
    if(val==="call"){
        radio_button_call();
    }
    else if(val==="sms"){
       radio_button_sms();
    }
}
    return{
        tottal,
callTotal,
action,
smsTotal,
radio_button_call,
radio_button_sms
    }
}
const radioBill = radio_bills();
callsTotalTwoElem.innerHTML = radioBill.callTotal();
smsTotalTwoElem.innerHTML =  radioBill.smsTotal();
totalCostTwoElem.innerHTML = 0.00;

radioBillAddBtn.addEventListener("click", function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
radioBill.action(billItemType);
//color the total based on the criteria
var total =radioBill.tottal();
if ( total>= 50){
    // adding the danger class will make the text red
    totalCostTwoElem.classList.add("danger");
            }
        else if (total >= 30){
            totalCostTwoElem.classList.add("warning");
            }
callsTotalTwoElem.innerHTML = radioBill.callTotal();
smsTotalTwoElem.innerHTML =  radioBill.smsTotal();
totalCostTwoElem.innerHTML = radioBill.tottal();
    });
