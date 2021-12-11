function checkCashRegister(price, cash, cid) {
    let totChange = cash - price;
    let totCid = 0
    let vuelto = []
    let vueltoRes = []

    
   //se controla que los billetes de cada denominacion alcancen para el vuelto cargandolo en un nuevo array. 
   vuelto.unshift(["ONE HUNDRED", ((cid[8][1] - parseInt (totChange / 100))*100)< 0 ? cid[8][1]:(parseInt(totChange / 100))*100 ])
    let change = totChange - vuelto[0][1];
   
    vuelto.unshift(["TWENTY", ((cid[7][1] - ((parseInt (change / 20))*20))< 0 ? cid[7][1]:(parseInt(change / 20))*20) ])
    change = change - vuelto[0][1];
    
    vuelto.unshift(["TEN", ((cid[6][1] - ((parseInt (change / 10))*10))< 0 ? cid[6][1]:(parseInt(change / 10))*10) ])
    change = change - vuelto[0][1];
    
    vuelto.unshift(["FIVE", ((cid[5][1] - ((parseInt (change / 5))*5))< 0 ? cid[5][1]:(parseInt(change / 5))*5) ])
    change = change - vuelto[0][1];
  
  
    vuelto.unshift(["ONE",  ((cid[4][1] - ((parseInt (change / 1))*1))< 0 ? cid[4][1]:(parseInt(change / 1))*1) ])
    change = change - vuelto[0][1];
  
    
    vuelto.unshift(["QUARTER", ((cid[3][1] - ((parseInt (change / (0.25)))*0.25))< 0 ? cid[3][1]:(parseInt(change / 0.25))*0.25) ])
    change = change - vuelto[0][1];

    vuelto.unshift(["DIME", ((cid[2][1] - ((parseInt (change / 0.1))*0.1))< 0 ? cid[2][1]:(parseInt(change / 0.1))*0.1) ])
    change = change - vuelto[0][1];
   
    vuelto.unshift(["NICKEL", ((cid[1][1] - ((parseInt (change / 0.05))*0.05))< 0 ? cid[1][1]:(parseInt(change / 0.05))*0.05) ])
    change = parseFloat((change - vuelto[0][1]).toFixed(2));
    
    vuelto.unshift(["PENNY", ((cid[0][1] - ((parseInt ((parseFloat((change).toFixed(2))) / 0.01))*0.01))< 0 ? cid[1][1]:(parseInt((parseFloat((change).toFixed(2)))  / 0.01))*0.01) ])
    change = change - vuelto[0][1];
   
    
    if ((change !=0) === true) {
        //si no es posible entregar el vuelto justo devuelve "INSUFFICIENT_FUNDS"
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    for (let j = 0; j < vuelto.length; j++ ) {
        if (vuelto[j][1]  != 0) {
            vueltoRes.push(vuelto[j]);
            //se crea un nuevo array sin los valores del array igual a 0
        }
    }
    for (let i = 0; i < cid.length;i++) {
        totCid = totCid  + cid[i][1]
        //se suma la cantidad de efectivo en la caja. 

        
    }
    console.log(totChange)
    if (totCid < totChange) {
        /* Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio
         necesario, o si no puedes devolver el cambio exacto. */
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }else {
        if (totCid === totChange) {
            /*Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change 
            es igual al cambio que se debe entregar.*/
            return {status: "CLOSED", change: vuelto.reverse()}
        }
    }
    /* devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de 
    mayor a menor, como valor de la clave change.*/
    return {status: "OPEN", change: vueltoRes.reverse()};
  }
  
 console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));