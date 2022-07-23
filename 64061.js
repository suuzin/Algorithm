function solution(board,moves){
    let answer = [];
    let count = 0;

    for(let i = 0; i < moves.length; i++){
        let tmp = moves[i]-1;
        for(let j = 0; j < board.length; j++){
            if(board[j][tmp]!=0){
                if(answer[answer.length-1]===board[j][tmp]){
                    answer.pop();
                    count +=2;
                }else{
                    answer.push(board[j][tmp]);
                }
                board[j][tmp] = 0;
                break;
            }
        }
    }
    return count; 
}
let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
let moves = [1,5,3,5,1,2,1,4];
solution(board,moves);