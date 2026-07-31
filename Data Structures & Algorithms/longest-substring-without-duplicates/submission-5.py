class Solution:
    def lengthOfLongestSubstring(self, s: str):

        l = 0
        r = 0
        ch_obj = {}
        max_v = 0
        count = 0

        while l <= r and r < len(s):
            if s[r] in ch_obj:
                if ch_obj[s[r]] >= l and ch_obj[s[r]] <= r:
                    if count > max_v:
                        max_v = count
                    l = ch_obj[s[r]] + 1
                    count = (r - l) + 1
                    ch_obj[s[r]] = r
                    r += 1
                else:
                    ch_obj[s[r]] = r
                    r += 1
                    count += 1
            else:
                ch_obj[s[r]] = r
                r += 1
                count += 1
        if count > max_v:
            max_v = count

        return max_v