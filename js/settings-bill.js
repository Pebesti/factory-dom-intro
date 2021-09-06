var call_update=0.00;
var sms_update=0.00;
var critical_level= 0.00;
var warning_level = 0.00;
var sms_radio = 0;
var call_radio = 0;
function settings_factory_function(){
function update_call(){
     return parseFloat(document.querySelector(".callCostSetting").value);
}
function update_sms(){
     return parseFloat(document.querySelector(".smsCostSetting").value);
}
function update_warning_level(){
     return parseFloat(document.querySelector(".warningLevelSetting").value);
}
function update_critical_level(){
    return parseFloat(document.querySelector(".criticalLevelSetting").value);
}
return{
    update_call,
    update_critical_level,
    update_sms,
    update_warning_level
}
}

function radio_button(){

    function radio_button_sms(){
        sms_radio+=update_settings.update_sms();
    }
    function radio_button_call(){
        call_radio+=update_settings.update_call();  
    }
    function tottal(){
return (sms_radio+call_radio).toFixed(2);
    }

    function callTotal(){
        return call_radio.toFixed(2);
    }
    function smsTotal(){
        return sms_radio.toFixed(2);
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
// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
const callsElem = document.querySelector(".callTotalSettings");
const smsElem = document.querySelector(".smsTotalSettings");
const totalElem = document.querySelector(".totalSettings");
//get a reference to the add button
const addButton = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
const updateButton = document.querySelector(".updateSettings");

// create a variables that will keep track of all three totals.
callsElem.innerHTML = 0.00;
smsElem.innerHTML = 0.00;
totalElem.innerHTML =0.00;
var prevTotalBill = 0.00;
const update_settings = settings_factory_function();
var criticalLevelSetting=0;
var warningLevelSetting=0;
//add an event listener for when the 'Update settings' button is pressed
updateButton.addEventListener("click", function(){
 update_settings.update_call();
 update_settings.update_sms();
 warningLevelSetting=update_settings.update_warning_level();
criticalLevelSetting= update_settings.update_critical_level();  
alert(warningLevelSetting);
addButton.disabled=false;
if(parseFloat(prevTotalBill) == parseFloat(criticalLevelSetting)) addButton.disabled=true;
if(parseFloat(prevTotalBill)<parseFloat(criticalLevelSetting)) totalElem.classList.remove("danger");
if(parseFloat(prevTotalBill) >= parseFloat(warningLevelSetting)) totalElem.classList.add("warning");
if(parseFloat(prevTotalBill) < parseFloat(warningLevelSetting)) totalElem.classList.remove("warning");

})
const bill_type= radio_button();
//add an event listener for when the add button is pressed
addButton.addEventListener("click", function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
       bill_type.action(billItemType);

//update the totals that is displayed on the screen.
callsElem.innerHTML = bill_type.callTotal();
smsElem.innerHTML = bill_type.smsTotal();
var total = bill_type.tottal();
totalElem.innerHTML = total;
prevTotalBill = total;
//color the total based on the criteria
if (total >= criticalLevelSetting){
    // adding the danger class will make the text red
    totalElem.classList.add("danger");
    addButton.disabled=true;
            }
        else if (total >= warningLevelSetting){
            totalElem.classList.add("warning");
            }
});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
