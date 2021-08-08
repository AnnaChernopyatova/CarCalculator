function sumPrice(){
    let prices = [];
    let i =0;
    prices[i] = document.getElementById("category").value;
    prices[i] = Number(prices[i]);
    i++;

    prices[i] = document.querySelector("input[name='oilType']:checked").value;
    prices[i] = Number(prices[i]);
    i++;

    prices[i] = document.getElementById("capacity").value;
    prices[i] = Number(prices[i]);
    prices[i] *= 1000;
    i++;

    prices[i] = document.querySelector("input[name='transmission']:checked").value;
    prices[i] = Number(prices[i]);
    i++;

    prices[i] = document.querySelector("input[name='gearing']:checked").value;
    prices[i] = Number(prices[i]);
    i++;

    let additionals = document.querySelectorAll("input[name='additional']:checked");
    
    for(let a = 0; a < additionals.length; a++){
        prices[i] = additionals[a].value;
        prices[i] = Number(prices[i]);
        i++;
    }

    
    let sum = 0;
    for (i = 0; i < prices.length; i++){
        sum += prices[i];
    }

    document.getElementById("formBlock_hidden").innerHTML = `Результаты расчета: ${sum}.`
    document.getElementById("formBlock_hidden").style.visibility = "visible";
}