document.getElementById('case-plus-btn').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldValueString = caseNumberField.value;
    const caseNumberFieldValue = parseInt(caseNumberFieldValueString);
    // case quantity increase part
    const caseNumberFieldValueIncrease = caseNumberFieldValue + 1;
    caseNumberField.value = caseNumberFieldValueIncrease;
    // case price part
    const casePrice = document.getElementById('case-price');
    const casePriceValueIncrease = caseNumberFieldValueIncrease * 100;
    casePrice.innerText = casePriceValueIncrease;

    // call subtotal,tax and total part
    getPhoneAndCasePriceTotalById()
});

document.getElementById('case-minus-btn').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldValueString = caseNumberField.value;
    const caseNumberFieldValue = parseInt(caseNumberFieldValueString);
    // case quantity decrease part
    const caseNumberFieldValueDecrease = caseNumberFieldValue - 1;
    caseNumberField.value = caseNumberFieldValueDecrease;
    // case price part
    const casePrice = document.getElementById('case-price');
    const casePriceValueDecrease = caseNumberFieldValueDecrease * 100;
    casePrice.innerText = casePriceValueDecrease;

    // call subtotal,tax and total part
    getPhoneAndCasePriceTotalById()
});

// clear number field value & case price value while click cross button
document.getElementById('case-cross-btn').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    caseNumberField.value = 1;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = 100;
});