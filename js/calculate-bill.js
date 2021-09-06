//get a reference to the calculate button
const calculateBtn  = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

var total = 0;
function Phonebill(){
    function sms(){
        total+=0.75;
    }
    function call(){
        total+=2.75;  
    }
    function action(val){
        if(val==="call"){
            call();
        }
        else if(val==="sms"){
           sms();
        }
    }
        function totall (){
            return total;
        }
    
    return{
        sms,
        action,
        call,
        totall
    }
}
const phonebill = Phonebill();

function calculateBtnClicked(){
    // get the string entered in the textArea
var billString = billStringElement.value;
total =0;
//split the string
var billItems = billString.split(",");
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
      phonebill.action(billItem);
    }
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
    var billTotal = phonebill.totall();
    //change colour
    if(billTotal>=30){
        billTotalElement.classList.add("danger");
    }
    else if(billTotal>=20){
        billTotalElement.classList.add("warning");
    }
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);