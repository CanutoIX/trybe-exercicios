function largestPrimeFactor(n){
    let i=2;
    while (i<=n){
        if (n%i == 0){
            n/=i;    
        }else{
            i++;
        }
    }
    console.log(i);
    }
    let a = 50; 
    largestPrimeFactor(a)