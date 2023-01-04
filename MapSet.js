//Maps and Sets Exercise
//Quick Question #1
//What does the following code return?
new Set([1,1,2,2,3,4])
Answer: [1,2,3,4]


//Quick Question #2
//What does the following code return?
//[...new Set("referee")].join("")
Answer: 'ref'

//Quick Questions #3
//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
Answer: {[1,2,3] => true} // key been [1,2,3] and Value true
Answer: {[1,2,3] => false}// key been [1,2,3] and Value false

//hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = (arr)=> {
    const newSet = new Set(arr)
    console.log(arr.length, newSet.size)
    if (arr.length !== newSet.size){
        return true
    } 
    else {return false}
}

//vowelCount
//Write a function called vowelCount which accepts a string and 
//returns a map where the keys are numbers and the values are 
//the count of the vowels in the string.
//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }
const vowelCount = (str) =>{
    let vowels = ['a','e','i','o','u']
    // console.log(setString)
    let string = str.toLowerCase()
    const vowelsMap = new Map();
    for (let c of string){
       if (vowels.includes(c)){
            if (vowelsMap.has(c)){
                vowelsMap.set(c, vowelsMap.get(c)+ 1)
            }
            else {
                vowelsMap.set(c, 1)
            }
       }
    }
    return vowelsMap
}