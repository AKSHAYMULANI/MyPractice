function taxCalculation(amount){
    if(amount<=250000){
        return "no tax"
    }
    else if(amount>250000 && amount<=500000){
        let saving = (amount*50)/100
        let tax = ((amount - saving)*10)/100
        return `saving: ${saving}, Tax: ${tax}`
    }
    else if(amount>500000 && amount<=1000000){
        let saving = (amount*30)/100
        let tax = ((amount - saving)*20)/100
        return `saving: ${saving}, Tax: ${tax}`
    }
    else{
        let saving = (amount*10)/100
        if(saving>50000){
            saving = 50000
        }
        let tax = ((amount - saving)*20)/100
        return `saving: ${saving}, Tax: ${tax}`
    }
}