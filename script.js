// document.getElementById("addPhone").addEventListener('click',function(){
//     handleProduct(true);
// })
// document.getElementById("rmvPhone").addEventListener('click',function(){
//     handleProduct(false)
// })

// document.getElementById("addCase").addEventListener('click',function(){
//     handleProductCase(true)
// })
// document.getElementById("rmvCase").addEventListener('click',function(){
//     handleProductCase(false)
// })

function handleProduct(product, increase) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNew = productCount;
    if (increase == true) {
        productNew = productCount + 1;
    }
    else if (increase == false && productCount > 0) {
        productNew = productCount - 1;
    }
    productInput.value = productNew;
    let productTotal = 0; {
        if (product == 'phone') {
            productTotal = productNew * 1219
        }
        if (product == 'case') {
            productTotal = productNew * 59;
        }
    }
    document.getElementById(product + "-total").innerText = "$" + productTotal;
    calculateTotal();
}
function calculateTotal() {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    const tax = parseInt( totalPrice*.01);
    const total = totalPrice + tax;
    document.getElementById("total").innerText = "$"+total;
    document.getElementById("taxAmount").innerText = "$"+tax;
    document.getElementById("totalPrice").innerText = "$" + totalPrice;
}








// function handleProduct(increase){
//     const phoneInput =  document.getElementById("totalPhone");
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNew = phoneCount;
//     if(increase==true){
//         phoneNew = phoneCount +1;
//     }
//     else if(increase == false && phoneCount >0){
//         phoneNew = phoneCount -1;
//     }
//     phoneInput.value = phoneNew;
//     const phoneTotal = phoneNew * 1219;
//     document.getElementById("phoneValue").innerText = "$"+phoneTotal;
// }
// function handleProductCase(increase){
//     const caseInput =  document.getElementById("totalCase");
//     const caseCount = parseInt(caseInput.value);
//     let caseNew = caseCount;
//     if(increase==true){
//         caseNew = caseCount +1;
//     }
//     else if(increase == false && caseCount >0){
//         caseNew = caseCount -1;
//     }
//     caseInput.value = caseNew;
//     const caseTotal = caseNew * 59;
//     document.getElementById("caseValue").innerText = "$"+caseTotal;
// }












// document.getElementById("addCase").addEventListener('click',function(){
//     const caseInput =  document.getElementById("totalCase");
//     const caseCount = parseInt(caseInput.value);
//     const caseNew = caseCount + 1;
//     caseInput.value = caseNew;
//     const caseTotal = caseNew * 59;
//     document.getElementById("caseValue").innerText = "$"+caseTotal;
// })
// document.getElementById("rmvCase").addEventListener('click',function(){
//     const Case = document.getElementById("totalCase");
//     const caseC = parseInt(Case.value);
//     const caseRmv = caseC - 1;
//     Case.value = caseRmv;
//     const caseMinus = caseRmv * 59;
//     document.getElementById("caseValue").innerText = "$"+caseMinus;
// })














































// let addPhone = document.getElementById("addPhone");
// let sum = 0;
// let amount = 1;
// addPhone.addEventListener('click', function () {
//     sum = sum + 1;
//     document.getElementById("totalPhone").value = sum;
//     amount = sum * 1219;
//     document.getElementById("phoneValue").innerText ="$"+amount;
//     const phoneTotal = amount;
//     document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
// })

// const rmvPhone = document.getElementById("rmvPhone");
// rmvPhone.addEventListener('click', function () {
//     sum = sum - 1;
//     document.getElementById("totalPhone").value = sum;
//     amount = sum * 1219;
//     document.getElementById("phoneValue").innerText = "$"+amount;
//     const phoneTotal = amount;
//     document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
// })

// const addCase = document.getElementById("addCase");
// addCase.addEventListener('click', function () {
//     sum = sum + 1;
//     document.getElementById("totalCase").value = sum;
//     amount =sum*59;
//     document.getElementById("caseValue").innerText = "$"+amount;
//     const phoneTotal = amount;
//     document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;


// })
// const rmvCase = document.getElementById("rmvCase");
// rmvCase.addEventListener('click', function () {
//     sum = sum - 1;
//     document.getElementById("totalCase").value = sum;
//     amount =sum*59;
//     document.getElementById("caseValue").innerText ="$"+amount;
//     const phoneTotal = amount;
//     document.getElementById("totalPhonePrice").innerText ="$"+phoneTotal;
// })
