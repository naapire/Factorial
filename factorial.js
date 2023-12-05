function calFactorial(num){
    if(num==0 || num==1){
        return1;
    }
    for(i=num-1; i>=1; i--){
        num*=i;
    }
    return num;
}
console.log(calFactorial(3))