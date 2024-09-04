function getPhoneAndCasePriceTotalById() {
    // subtotal calculation
    const phonePrice = document.getElementById('phone-price');
    const phonePriceValueString = phonePrice.innerText;
    const phonePriceValue = parseInt(phonePriceValueString);

    const casePrice = document.getElementById('case-price');
    const casePriceValueString = casePrice.innerText;
    const casePriceValue = parseInt(casePriceValueString);

    const subTotal = phonePriceValue + casePriceValue;
    const subTotalPrice = document.getElementById('sub-total');
    subTotalPrice.innerText = subTotal;

    // Tax calculation
    const tax = subTotal * 0.01;
    const totalTax = document.getElementById('total-tax')
    totalTax.innerText = tax;
    // total calculation
    const totalPrice = document.getElementById('total-price');
    const totalPrices = subTotal + tax;
    totalPrice.innerText = totalPrices;
}