class Solution:
    def maxArea(self, heights: List[int]) -> int:
        
        max_v = 0
        l = 0
        r = len(heights) - 1

        while l < r :
            area = (r-l) * min(heights[l],heights[r])

            if area > max_v : max_v = area
            
            if heights[l] < heights[r] : l = l + 1
            else: r = r - 1

        return max_v