class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let r = 0
        let max = 0
        const set = new Set()

        while (r < s.length) {
            console.log({l, r, set})
            if (!set.has(s[r])) {
                set.add(s[r])

                max = Math.max(max, set.size)
                r++
            } else {
                set.delete(s[l])
                
                l++
            }
        }

        return max
    }
}
