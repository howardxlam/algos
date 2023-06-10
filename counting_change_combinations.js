/* Write a function that counts how many different ways 
you can make change for an amount of money, 
given an array of coin denominations. For example,
 there are 3 ways to give change for 4 if you have 
 coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0
  */

function countChange(amount, coins) {
    //dynamic programming, create an array to initialize all elements to 0
    const newArr = new Array(amount + 1).fill(0);
    //newArr[i] is the number of ways to make change, i is coin denominations
    newArr[0] = 1; 

    //iterate through each coin
        //then iterate through value to the amount
            //newArr will be updated by adding the value of j-coin
    for (let coin of coins) {
        for (let j = coin; j <= amount; j++) {
            newArr[j] += newArr[j - coin];
        }
    }

    return newArr[amount];
}
console.log(countChange(4, [1, 2]));
console.log(countChange(10, [5, 2, 3]));
console.log(countChange(11, [5, 7]));