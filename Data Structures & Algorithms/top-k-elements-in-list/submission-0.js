class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (const n of nums) {
            if (!count[n]) count[n] = 0
            count[n] += 1
        }

        const arr = Object.entries(count).sort((a, b) => b[1] - a[1])

        return arr.slice(0, k).map((n) => n[0])
    }
}
