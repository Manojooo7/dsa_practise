
// var longestCommonPrefix = function(strs) {
//     if(!strs.length) return "";
//     console.log(strs);
//     strs.sort()
//     console.log(strs);
    
//     let f = strs[0]
//     let l = strs[strs.length - 1]
//     let i =0;

//     while(i < f.length && f[i] === l[i]){
//         i++
//     }

//     return f.slice(0, i)

// };


// console.log(longestCommonPrefix(["aaa","aa","aaa"]));


// var twoSum = function(nums, target) {
    
//     let ans = []
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }

//     return ans
// };

// console.log(twoSum([2,5,11,15], 9));


// Practise set and map

var containsDuplicate = (arr)=>{

    const newSet = new Set();

    for(let i = 0; i < arr.length; i++){
        if(newSet.has(arr[i])) return true;
        newSet.add(arr[i])
    }

    console.log(newSet);
    return false;
    
}

// console.log(containsDuplicate([1, 2, 3, 5,1]));


// Second Question

var firstRepeating = (arr) =>{
    const newMap = new Map();

    for(let i = 0; i < arr.length; i++){
        if(newMap.has(arr[i])) return arr[i];
        newMap.set(arr[i], i)
    }

    return undefined
}

// console.log(firstRepeating([1, 2, 3, 4]));

var charFrequency = (str) =>{
    let newMap = new Map();

    for(let i = 0; i < str.length; i++){
        newMap.set(str[i], (newMap.get(str[i] || 0) + 1 ))
    }

    return newMap
}

// console.log(charFrequency("banana"));

var isUnique = (str) =>{
    let newSet = new Set();

    for(let i = 0; i < str.length; i++){
        if(newSet.has(str[i])) return false;
        newSet.add(str[i])
    }

    return true
}

// console.log(isUnique("aba"));


function rangeSum(arr, left, right) {
    // Implement this using prefix sum
    let prefixArr = [];
    prefixArr[0] = arr[0]

    for(let i = 1; i < arr.length; i++){
        prefixArr.push(prefixArr[i-1] + arr[i])
    }

    if(left === 0) console.log(prefixArr[right]);
    

    console.log(prefixArr[right] - prefixArr[left - 1])
}

// rangeSum([1, 3, 5, 7, 9], 1, 3);


// function kAppearance(arr, k){

//     let prefixSum = 0;
//     let map = new Map()
//     let kCount = 0
//     map.set(0,1)

//     for(let num of arr){
//         prefixSum += num;
//         if(map.has(prefixSum - k)){
//             kCount+= map.get(prefixSum - k)
//         }
//         map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
//     }
//      console.log("k count: ", kCount);
// }




function kAppearance(arr, k){
    let prefixSum = 0;
    let map = new Map();
    map.set(0, 1);
    let count = 0;

    for(let num of arr){
        prefixSum += num;

        if(map.has(prefixSum - k)){
            count += map.get(prefixSum - k);
        }

        // update frequency
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    console.log(count);
}

kAppearance([1, 2, 1, 1, 1], 3);


function kAppearance(arr, k){
    let prefixSum = 0;
    let map = new Map();
    map.set(0, -1);
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        prefixSum += arr[i];

        if(map.has(prefixSum - k)){
            count += 1;
        }

        // update frequency
        if(!map.has(prefixSum)){
            map.set(prefixSum, i);
        }
    }

    console.log(count);
}

// kAppearance([1, 1, 1], 2);




function prefixEvenNum(arr){
   
    
}

// prefixEvenNum([1, 2, 3, 4])
// Input: [2, 3, 1, 2, 4, 3], k = 7

function longestSubArrayOfK(arr, k){
  
    
}

// longestSubArrayOfK([2, 3, 1, 2, 4, 3], 7)


// Given an array arr and an integer k, find the maximum sum of any contiguous subarray of size k.
// arr = [2, 1, 5, 1, 3, 2], k = 3
// ans = 9


// ✏️ Hints:
// 	•	Think of using two pointers: windowStart and windowEnd.
// 	•	Keep adding elements to a windowSum.
// 	•	Once the window size hits k, compare with maxSum, then slide the window forward by removing arr[windowStart].

function maximumSumOfK(arr, k){
    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum+=arr[i]
    }

    for(let i = k; i < arr.length; i++){
     windowSum = (windowSum + arr[i]) - arr[i - k]; 
     
     //i = 4 arr[i] = 1 arr[i - k] = arr[0] -> arr[4] - arr[0] -> 5 - 2 

     maxSum = Math.max(maxSum, windowSum)
    }

    console.log(maxSum);
    

}

// maximumSumOfK([2, 1, 5, 1, 3, 2],3)



function groupAnagramB(arr){

    let anagramArray = []
    let map = new Map()

    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        if(map.has(currentElement + i)) continue;

        let currentSortedString = currentElement.split('').sort().join('')
        let currentArray = [currentElement];

        map.set(currentElement + i, true)

        for(let j = i + 1; j < arr.length; j++){
            let newElement = arr[j];


            let newSortedString = newElement.split('').sort().join('')

            if(!map.has(newElement + j) && currentSortedString === newSortedString){
                currentArray.push(newElement)
                map.set(newElement + j, true)
            } 
        }
        anagramArray.push(currentArray)
    }
    console.log(anagramArray);
    return anagramArray
}

function groupAnagram(arr) {
    let map = new Map();

    for(let word of arr){
        let frequency = new Array(26).fill(0)

        for(ch of word){
            let index = ch.charCodeAt(0) - 97;
            frequency[index]++;
        }

        let key = frequency.join('#');

        if(!map.has(key)){
            map.set(key, [])
        }

        map.get(key).push(word)
    }
    console.log(Array.from(map.values()));
    
    return Array.from(map.values())
}

// groupAnagram(["eat","tea","tan","ate","nat","bat"])


var topKFrequent = function(nums, k) {
    let map = new Map();
    let bucket = Array(nums.length + 1).fill().map(()=> [])
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+ 1)
    }

    for(let[num, freq] of map.entries()){
        bucket[freq].push(num)
    }
    let res = []

    for(let i = bucket.length - 1; i >= 0 && res.length < k; i--){
        for(let num of bucket[i]){
            res.push(num);
            if(res.length === k) break
        }
    }
    
    console.log(res);
    
};

// topKFrequent([1,1,1,2,2,3], 2)


function simpleTextEditor(s, ops){

    let currentString = s;
    let history = [];
    let result = []

    function appendS(w){
        history.push(currentString) 
        currentString += w
    }
    function deleteS(k){
        history.push(currentString)
        currentString = currentString.slice(0, -k);
    }
    function printS(k){
        if(k >= 1 && k <= currentString.length){
            result.push(currentString[k - 1]);
        }else{
            result.push('undefined')
        }
        
    }
    function undoS(){
        if(history.length > 0){
            currentString = history.pop();
        }
    }

    for(let i = 0; i < ops.length; i++){
       let op = (ops[i].split(' '));
       
       if(op[0] === '1'){
        appendS(op[1])
       }

       if(op[0] === '2'){
        deleteS(parseInt(op[1]))
       }

       if(op[0] === '3'){
        printS(parseInt(op[1]))
       }

       if(op[0] === '4'){
        undoS()
       }
    }
    // console.log(result);
    
    return result
}

// simpleTextEditor('abcde', ['1 fg', '3 6', '2 5', '4', '3 7', '4', '3 4'])


function productOfArr(arr){

    let n = arr.length
    let ps = {};
    let ans = Array(n).fill(1)

    // let l = 0, r = arr.length - 1;
    // let prefix = 1, sufix = 1

    // for(let i = 0; i < arr.length; i++){
    //     ps[`p${i}`] = prefix;
    //     prefix *= arr[l]

    //     ps[`s${(arr.length - 1) - i}`] = sufix;
    //     sufix *= arr[r]

    //     l++
    //     r--
    // }

    // console.log(ps);
    

    let prefix = 1
    for(let i = 0; i < arr.length; i++){
        ans[i] = prefix;
        prefix *= arr[i]
    }

    let sufix = 1;
    for(let i = n - 1; i >= 0; i--){
        ans[i] *= sufix;
        sufix *= arr[i]
    }

    // for(let i =0; i< n; i++){
    //     let sum = ps[`s${i}`] * ps[`p${i}`];
    //     ans.push(sum)
    // }

    console.log(ans);
    
    return ans;

    // let ans = []

    // for(let i = 0; i < arr.length; i++){
        
    //     let temp = 1
    //     for(let j = 0; j < arr.length; j++){
    //         if(i!==j){
    //             temp= temp * arr[j];
    //         }
    //     }
    //     ans.push(temp);
        
    // }

    // console.log(ans);
    
}

// productOfArr([1,2,4,6])