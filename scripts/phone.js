document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldValueString = phoneNumberField.value;
    const phoneNumberFieldValue = parseInt(phoneNumberFieldValueString);
    // phone quantity increase part
    const phoneNumberFieldValueIncrease = phoneNumberFieldValue + 1;
    phoneNumberField.value = phoneNumberFieldValueIncrease
    // phone price part
    const phonePrice = document.getElementById('phone-price');
    const phonePriceValueIncrease = phoneNumberFieldValueIncrease * 1000;
    phonePrice.innerText = phonePriceValueIncrease;

    // call subtotal,tax and total part
    getPhoneAndCasePriceTotalById()
});

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldValueString = phoneNumberField.value;
    const phoneNumberFieldValue = parseInt(phoneNumberFieldValueString);
    // phone quantity decrease part
    const phoneNumberFieldValueDecrease = phoneNumberFieldValue - 1;
    phoneNumberField.value = phoneNumberFieldValueDecrease
    // phone price part
    const phonePrice = document.getElementById('phone-price');
    const phonePriceValueDecrease = phoneNumberFieldValueDecrease * 1000;
    phonePrice.innerText = phonePriceValueDecrease;

    // call subtotal,tax and total part
    getPhoneAndCasePriceTotalById()
});

// clear number field value & phone price value while click cross button
document.getElementById('phone-cross-btn').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    phoneNumberField.value = 1;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = 1000;
});