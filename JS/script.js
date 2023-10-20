const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromcurrency = document.getElementById('from-currency-select');
const tocurrency = document.getElementById('to-currency-select');

// create dropdown fron the currency array
currencies.forEach((currency) => { 
// console.log(currency);
const option = document.createElement('option')
option.value = currency;
option.text = currency
fromcurrency.add(option)
})

// Repeat same thing for the other dropdown
currencies.forEach((currency) => { 
// console.log(currency);
const option = document.createElement('option')
option.value = currency;
option.text = currency
tocurrency.add(option)
})

// setting dropdown default value
fromcurrency.value = 'PKR'
tocurrency.value = 'USD'

// curreny convert
let convertCurrency = () => {
    const amount = document.querySelector('#amount').value
    const fromcurrency = document.querySelector('#from-currency-select').value
    const tocurrency = document.querySelector('#to-currency-select').value
    const result = document.querySelector('#result')
    
    // impunt inputfiled is not empty
    if(amount.length != 0){
        fetch(api)
        .then((resp) => resp.json())
        .then((data) =>{
            let fromExchangeRate = data.conversion_rates[fromcurrency]
            let toExchangeRate = data.conversion_rates[tocurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromcurrency} = ${convertedAmount.toFixed(2)}`
        })
    }else{
        alert('Please fill in the amount')
    }
}

document.querySelector('#convert-button').addEventListener('click',convertCurrency)

window.addEventListener('load',convertCurrency)
