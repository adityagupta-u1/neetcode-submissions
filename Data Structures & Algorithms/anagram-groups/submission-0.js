class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let strMap = {};
        let anagram = []
        for(let str of strs){
            let sortedStr = str.split('').sort().join('');
            if(!strMap[sortedStr]){
                strMap[sortedStr] = [str]
            } else {
                let currentArray = strMap[sortedStr];
                strMap[sortedStr] = [...currentArray,str]
            }
        }
        for(const key in strMap){
            anagram = [...anagram,strMap[key]]
        }
        return anagram
    }
}
