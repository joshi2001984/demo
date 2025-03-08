
let userinput;
let amount;
let from_currency;
let to_currency;
let result;

document.querySelector('.convertbtn').addEventListener('click',()=>{
    amount=document.querySelector('.amountinput').value;
    console.log(amount);
    
    
    to_currency=document.querySelector('.To').value;
    console.log(to_currency);
    from_currency=document.querySelector('.From').value;
    console.log(from_currency);
    let request = new XMLHttpRequest;
request.open('GET', `https://open.er-api.com/v6/latest/${from_currency}`);

    request.send();3
    request.addEventListener('load', () => {
        let response = request.responseText;
    
        let data = JSON.parse(response);
        let target_currencyvalue=data.rates[to_currency]
        console.log(data.rates);
        console.log(amount*target_currencyvalue)
        let result= (amount*target_currencyvalue).toFixed(3);
        console.log(result)
        document.querySelector('.Output').textContent=`${result}`;
    });
})
// let request2 = new XMLHttpRequest;
// request2.open('GET', `https://open.er-api.com/v6/latest/${to_currency}`);

//     request2.send();
    
//     request2.addEventListener('load', () => {
//         let response2 = request2.responseText;
    
//         let data2 = JSON.parse(response2);
       
//         console.log(data2.rates);
//     })