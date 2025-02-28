const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const tableBody = document.querySelector(".tableBody")
const search = document.querySelector(".search-input")
const sortName = document.querySelector(".sortName")
const minChange = document.querySelector(".minChange")

renderData(data)
function renderData(data){
    tableBody.innerHTML = ""
    data.forEach(data => {
        tableBody.innerHTML +=`
        <tr>
                <td>${data.name}</td>
                <td>${data.ticker}</td>
                <td>${data.value}</td>
                <td>${data.change}</td>
                </tr>
        `
        
    });
}



let upSort = true;

sortName.addEventListener("click",()=>{
    let sortData;
    if (upSort) {
        sortData = data.sort((a, b) => a.name.localeCompare(b.name));  
    }else{
        sortData = data.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    // console.log(sortData);
    renderData(sortData)
    upSort=!upSort;
})


search.addEventListener("keyup",e=>{
    let searchTerm = e.target.value.toLowerCase();
   let newData = data.filter(pro=>
    pro.name.toLowerCase().includes(searchTerm) || pro.ticker.toLowerCase().includes(searchTerm));
   renderData(newData)
    // console.log(newData);
    
})



// data.forEach(data => {
//     data.change.forEach(number=>{
//         minChange.textContent=number
//         if (number>0) {
//             minChange.style.backgroundColor = 'green';
//         }else{
//             minChange.style.backgroundColor = 'red';
//         }
//         document.getElementById('output').appendChild(minChange);
//     })
    
    
// })

