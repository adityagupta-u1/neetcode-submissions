class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length === 0){
            return 0
        }

        let numSet = new Set(nums);
        let currentStreak = 0;
        let currentNum;
        let longestStreak = 0;
        for(let num of numSet){
            if(!numSet.has(num-1)){
                currentNum = num;
                currentStreak = 1;
            }

            while(numSet.has(currentNum + 1)){
                currentNum ++;
                currentStreak ++
            }
            longestStreak = Math.max(currentStreak,longestStreak);
        }
        return longestStreak;
    }
}
