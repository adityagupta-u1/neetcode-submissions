class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let pointer1 = 0;
        let pointer2 = numbers.length-1;
        let sum;

        for(let i = 0;i<numbers.length;i++){
            sum = numbers[pointer1] + numbers[pointer2];
            if(sum === target){
                return [pointer1+1,pointer2+1]
            }
            if(sum>target){
                pointer2 --
            } else {
                pointer1 ++
            }
        }
    }
}
