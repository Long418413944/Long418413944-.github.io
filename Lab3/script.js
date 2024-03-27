var billTotalInput = document.getElementById("billTotal");
var errorMessage = document.getElementById("error-message");

billTotalInput.addEventListener("blur", function() {
  var billTotal = billTotalInput.value.trim();
  
  if (billTotal === "") {
    errorMessage.textContent = "";
  } else if (!/^[0-9.]+$/.test(billTotal)) {
    errorMessage.textContent = "Please enter a valid number.";
  } else {
    errorMessage.textContent = "";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const tipForm = document.getElementById('tipForm');
  const billTotalInput = document.getElementById('billTotal');
  const tipPercentageInput = document.getElementById('tipPercentage');
  const tipPercentageValueInput = document.getElementById('tipPercentageValue');
  const tipAmountInput = document.getElementById('tipAmount');
  const totalBillInput = document.getElementById('totalBill');

  tipForm.addEventListener('input', function() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalBill = billTotal + tipAmount;

    tipPercentageValueInput.value = tipPercentage + '%';
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillInput.value = totalBill.toFixed(2);
  });
});
