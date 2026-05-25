class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const set = new Set()

        for (const c of s) {
            set.add(c)
        }
        let max = 0

        for (let c of set) {
            let count = 0
            let l = 0

            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) count--
                    l++
                }

                max = Math.max(max, r - l + 1)
            }
        }

        return max
    }
}
