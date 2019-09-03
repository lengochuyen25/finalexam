function printFibonacci() {
    let n =prompt("Nhập vào số nguyên n");
    let number1=0;
    let number2=0;
    let total=1;
    document.write(0 +"<br>");
    document.write(1+"<br>");
    for (let i = 2; i < n; i++) {
        number1 = number2;
        number2 = total;
        total = number1 + number2;
        document.write(total+"<br>");
    }
}
printFibonacci();
