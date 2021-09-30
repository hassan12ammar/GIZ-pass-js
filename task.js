// make 'fs' so that we can read and write from and to files
const fs = require('fs');

// change the numbers array to be immutable
const numbers = [5, 8, 0, 1, 9, 11, 15, 16];
// make a copy of the array, keep the first array as it is and print the new one :)
let copyNumbers = [...numbers];
console.log("numbers list: ", copyNumbers);

// read the file 'data.txt' 
file = fs.readFileSync("./data.txt", 'utf-8');
// console.log(file)
// set the file values to new, (array I called 'numbersFromFile' )
const numbersFromFile = file.split(",");
console.log("Original numbers list: ", numbersFromFile);
// get length of the array so we can use it in the for loop when sorting
let list_length = numbersFromFile.length;

// make a copy of our 'numbersFromFile' array
// that will sort as ASC in, (I called 'sortedNumbersAsc')
let sortedNumbersAsc = [...numbersFromFile];

// change the indexing to be all from the second for loop
// becaus the first one just to repeat the process

// Asc from smallest to largest
// loop on our list lenght times so we don't mess any number
// if we found number that latger than the next, will swap them
for(let i = 0 ; i < list_length ; i++)
{
    for(let j = 0 ; j < list_length - 1 ; j++)
    {
        if(sortedNumbersAsc[j] > sortedNumbersAsc[j + 1])
        {
            let temp = sortedNumbersAsc[j];
            sortedNumbersAsc[j] = sortedNumbersAsc[j + 1];
            sortedNumbersAsc[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Asc sorting: ", sortedNumbersAsc);

// make another copy from original array
// to sort as Desc in, I called 'sortedNumbersDesc'
let sortedNumbersDesc = [...numbersFromFile];
// Desc from largest to smallest so 
// if we found number that smaller than the next, will swap them
for(let i = 0 ; i < list_length ; i++)
{
    for(let j = 0 ; j < list_length - 1 ; j++)
    {
        if(sortedNumbersDesc[j] < sortedNumbersDesc[j + 1])
        {
            let temp = sortedNumbersDesc[j];
            sortedNumbersDesc[j] = sortedNumbersDesc[j + 1];
            sortedNumbersDesc[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", sortedNumbersDesc);

// change our Asc sorted array to string and join bassed on ',' so it's look like lis
sortedNumbers = sortedNumbersAsc.join(",").toString();
// save it in 'output.txt' file
fs.writeFile( 'output.txt', sortedNumbers, (err) => 
{
    // In case of a error throw err.
    if (err) throw err;
    // print something to make sure if it's saved
    console.log("the file wrote successfully");
} )
