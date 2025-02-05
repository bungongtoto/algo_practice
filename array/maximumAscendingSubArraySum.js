nums = [12,17,15,13,10,11,12]

//helper function: returns max value in an array
const maxArrNum = (array) => {
   let max = array[0];

   for (let i = 1 ; i < array.length ; i++) {
     if (array[i] > max) {
        max = array[i]
     }
   }

   return max;
}

const maxAscendingSum = (nums) => {
    const sums = []
    let sum = nums[0];

    if (nums.length === 1) {
        return sum;
    }

    for(let i = 0; i < nums.length ; i++) {
        if (nums[i] < nums[i+1]) {
            sum += nums[i+1];
        } else {
            sums.push(sum);
            sum = nums[i+1];
        }
    }

    return maxArrNum(sums);

}

console.log(maxAscendingSum(nums));