// function fib(n){
//     if(n === 0 || n === 1) return n;
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(5))

// function factorial(n){
//     if(n === 0) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// function multiply(a, b){
//     if(b === 0) return 0;
//     return multiply(a, b-1) + a;
// }

// console.log(multiply(6,4));


// function pow (a, b){
//     if(b === 0) return 1;
//     return pow(a, b-1) * a;
// }
// console.log(pow(2,5));

// function powA (a,b){
//     if(b === 0) return 1;
//     let hpow = powA(a, Math.floor(b/2));
//     if(b % 2 === 0){
//         return hpow * hpow
//     }else{
//         return hpow * hpow * a
//     }
// }

// console.log(powA(2,5));


// Is Palindrom using recurssion

// let s = "abcba"
// function isPalindrom(s, l=0, r=s.length-1){

//     if(l >= r) return true;
    
//     return (s.charAt(l) === s.charAt(r)) 
//     && isPalindrom(s, l+1, r-1)
// }
// console.log(isPalindrom("abcba"));


// function permutation(s, q=""){
//     let ans = []
    
//     if(s.length === 0){
//         console.log(q);
//         return
//     }

//     for(let i = 0; i < s.length; i++){

//         let char = s.charAt(i);
//         let ns = s.substring(0, i) + s.substring(i+1);

//         permutation(ns, q + char)
//     }

//     console.log(ans);
    
// }

// permutation("abc");


// Permutatio array

// function permutationArr(nums){
//     let ans = [];

//     const helperFn = function(input, used){
        
//         if(input.length === used.length){
//             ans.push([...used]);
//             return;
//         }

//         for(let i = 0; i < input.length; i++){
//             if(!used.includes(input[i])){
//                 used.push(input[i]);
//                 helperFn(input, used);
//                 used.pop();
//             }
//         }
//     }

//     helperFn(nums, []);

//     return ans

// }

// console.log(permutationArr([1,2,3,4]));

// TC: n * n * n! 

// SC: 0(N)

// function distinctpermutationArr(nums){
//    let ans = [];
//    nums.sort((a,b)=> a-b);

//    let visited = new Array(nums.length).fill(false);

//    function helperFn(input, used, visited){
//         if(used.length === input.length){
//             ans.push([...used]);
//             return;
//         }

//         for(let i = 0; i < input.length; i++){
//             if(visited[i] || i > 0 && input[i] === input[i-1] && !visited[i-1]) continue;

//             used.push(input[i]);
//             visited[i] = true;

//             helperFn(input, used, visited);

//             used.pop();
//             visited[i] = false;
//         }
//    }

//    helperFn(nums, [], visited);

//    return ans;
// }

// console.log(distinctpermutationArr([1,1,2]));



// function solveNQueens(n){

//     let ans = [];
//     let board = Array.from({ length: n }, () => Array(n).fill('.'));
//     console.log(board.length);
    
//     function nQueens(arr, row){

//         if(row === arr.length){ 
//             let curr = [];
//             for(let i = 0; i < arr.length; i++){
//                 curr.push(arr[i].join(''));
//             }
//             ans.push(curr);
//             return
//         }

//         for(let col = 0; col < arr.length; col++){
//             if(isSafe(arr, row, col)){
//                 arr[row][col] = 'Q';
//                 nQueens(arr, row+1);
//                 arr[row][col] = '.';
//             }
//         }
//     }
    
//     function isSafe(arr, row, col){
        
//         // Check Vertically
//         for(r=row; r>=0; r--){
//             if(arr[r][col] === 'Q') return false
//         }

//         // Check Positive Diogonally

//         for(r=row, c=col; r>=0 && c>=0; r--, c--){
//             if(arr[r][c] === 'Q') return false
//         }

//         // Check Negetive Diogonally

//         for(r=row, c=col; r>=0 && c < arr.length; r--, c++){
//             if(arr[r][c] === 'Q') return false
//         }

//         return true

//     }

//     nQueens(board, 0);
//     return ans;
// }

// console.log(solveNQueens(4));




// var solveNQueens = function(n) {
//     let ans = [];
//     let board = Array.from({length: n}, ()=>Array(n).fill("."));
    
//     var isSafe = function(arr, row, col){
        
    
//         for(r = row; r >= 0; r--){
//             if(arr[r][col] === 'Q') return false
//         }
    
//         for(r=row, c = col; r >= 0 && c >= 0; r--, c--){
//             if(arr[r][c] === 'Q') return false
//         }
    
//         for(r = row, c = col; r >= 0 && c < arr.length; r--, c++){
//             if(arr[r][c] === 'Q') return false
//         }
    
//         return true
//     }
//     var nQueens = function(arr, row){
    
//         if(row === arr.length){
//             let cur = [];
    
//             for(let i= 0; i<arr.length; i++){
//                  cur.push(arr[i].join(''))
//             }
//             ans.push(cur);
//             return
//         }
    
//             for(let col = 0; col < arr.length; col++){
//                 if(isSafe(arr, row, col)){
//                     arr[row][col] = 'Q';
//                     nQueens(arr, row+1);
//                     arr[row][col] = '.';
    
//                 }
//             }
//     }
//     // console.log(board);
    
//     nQueens(board, 0);
//     return ans
// };

/*{
    
let ans = [];

var isSafe = function(arr, row, col){

    for(let r = row; r >= 0; r--){
        if(arr[r][col] === 'Q') return false
    }

    for(let r=row, c = col; r >= 0 && c >= 0; r--, c--){
        if(arr[r][c] === 'Q') return false
    }

    for(let r = row, c = col; r >= 0 && c < arr.length; r--, c++){
        if(arr[r][c] === 'Q') return false
    }

    return true
}

var nQueens = function(arr, row){

    if(row === arr.length){
        let cur = [];

        for(let i= 0; i<arr.length; i++){
             cur.push(arr[i].join(''))
        }
        ans.push(cur);
        return
    }

        for(let col = 0; col < arr.length; col++){
            if(isSafe(arr, row, col)){
                arr[row][col] = 'Q';
                nQueens(arr, row+1);
                arr[row][col] = '.';

            }
        }
}

var solveNQueens = function(n) {
    let board = Array.from({length: n}, ()=>Array(n).fill("."));
    nQueens(board, 0);
    return ans
};
console.log(solveNQueens(1));
}*/


/*{let ans = [];


function isValidPartition(str){
    let left = 0, right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--
    }

    return true;
}

function helper(str, currentPartition){

    if(str === ''){
        ans.push([...currentPartition]);
    }

    for(let partition = 1; partition <= str.length; partition++){

        let prefix =str.substring(0, partition);
        let reamin = str.substring(partition);

        if(isValidPartition(prefix)){
            currentPartition.push(prefix);
            helper(reamin, currentPartition);
            currentPartition.pop()
        }
    }
}

function palindromPeremutation(str){
    helper(str, []);
    return ans;
}

console.log(palindromPeremutation('abaaba'))
}*/

{/*

function isSafe(board, row, col, num){

    // check col
    for(let r = 0; r < 9; r++){
        if(board[r][col] === num) return false;
        if(board[row][r] === num) return false;

    }

    let gc = Math.floor(col / 3) * 3;
    let gr = Math.floor(row / 3) * 3;

    for(let r = 0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            if(board[gr + r][gc + c] === num) return false;
        }
    }

    return true

}

function helper(board, row, col){

    if(col === 9){
        row++;
        col = 0
    }

    if(row === 9) return true
    
    if(board[row][col] === '.'){
        for(let num = 1; num <= 9; num++){
            if(isSafe(board, row, col, num)){
                let ch = num.toString()
                board[row][col] = ch;
                if(helper(board, row, col + 1)) return true;
                board[row][col] = '.';
            }
        }
        return false

    }else return helper(board, row, col + 1)
}

function sudokuSolver(){
    let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
    helper(board, 0, 0);

    return board;
}

*/}






