function prime_Num(num){
    if(num<0){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return true
  }
res=prime_Num(9)
console.log(res)
