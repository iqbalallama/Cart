function getInput(products,isAdd,price){
    const product = document.getElementById(products+'-input')
    let productNumber = parseInt(product.value) ;
    if(isAdd){
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0){
        productNumber = productNumber - 1;
    }
    product.value = productNumber;

    const productTotal = document.getElementById(products +'-number');
    const productP = parseFloat(productTotal.innerText) ;
    productTotal.innerText = productNumber * price;
    getCalculate()
}
function getD(productt){
    const phn = document.getElementById(productt);
    const phnP = parseFloat(phn.value)
    return phnP;
}
function getCalculate(){
    const phnP = getD('phone-input')*1219;
    const caseT = getD('case-input')*59;
    const subTotal = phnP + caseT;
    const tax = parseInt(subTotal * 0.1);
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    getInput('phone',true,1219)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    getInput('phone',false,1219)
})
document.getElementById('case-plus').addEventListener('click',function(){
    getInput('case',true,59)
})
document.getElementById('case-minus').addEventListener('click',function(){
    getInput('case',false,59)
})