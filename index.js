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


function Even_Odd(num){
    if(num%2==0){
        return true
    }
    return false
}
res=Even_Odd(3)
console.log(res)