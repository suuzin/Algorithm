function solution(a,b){
    let anwer = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] % b === 0){
            anwer.push(a[i]);
        }
    }
    anwer.sort((a,b)=>a-b);
    if(anwer.length === 0) anwer.push(-1);
    return console.log(anwer);
}
solution([3,2,6],10);