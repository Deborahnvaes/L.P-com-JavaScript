function somar1(a,b){
    return a + b;
}

console.log(somar1(5,4));
//tecnica voltada para programação funcional

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(5)(4));

const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));