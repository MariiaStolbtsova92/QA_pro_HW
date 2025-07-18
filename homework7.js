var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
let total =0;
let prices = [];
for (let key in services){
    let rawValue = services[key];
   let price = parseInt(rawValue);
   prices.push(price);
   total +=price;
   
}
services.price = function() {
  let minNumber = Math.min(...prices);
 let maxNumber =  Math.max(...prices);
return {
    min: minNumber,
    max: maxNumber,
    total: total
};
};
const result = services.price();

 console.log("Загальна сумма:", result.total);
 console.log("Мінімальна сумма:", result.min);
 console.log("Максимальна сумма:", result.max);