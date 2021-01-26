let addPhone = document.getElementById("addPhone");
let sum = 0;
let amount = 1;
addPhone.addEventListener('click', function () {
    sum = sum + 1;
    document.getElementById("totalPhone").value = sum;
    amount = sum * 1219;
    document.getElementById("phoneValue").innerText ="$"+amount;
    const phoneTotal = amount;
    document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
})

const rmvPhone = document.getElementById("rmvPhone");
rmvPhone.addEventListener('click', function () {
    sum = sum - 1;
    document.getElementById("totalPhone").value = sum;
    amount = sum * 1219;
    document.getElementById("phoneValue").innerText = "$"+amount;
    const phoneTotal = amount;
    document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
})

const addCase = document.getElementById("addCase");
addCase.addEventListener('click', function () {
    sum = sum + 1;
    document.getElementById("totalCase").value = sum;
    amount =sum*59;
    document.getElementById("caseValue").innerText = "$"+amount;
    const phoneTotal = amount;
    document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;


})
const rmvCase = document.getElementById("rmvCase");
rmvCase.addEventListener('click', function () {
    sum = sum - 1;
    document.getElementById("totalCase").value = sum;
    amount =sum*59;
    document.getElementById("caseValue").innerText ="$"+amount;
    const phoneTotal = amount;
    document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
})
