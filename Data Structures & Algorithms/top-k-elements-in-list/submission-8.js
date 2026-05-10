class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (k >= nums.length) return nums
        const count = {}
        let res = []

        for (const n of nums) {
            if (!count[n]) count[n] = 0
            count[n] += 1
        }

        const arr = Array.from({length: nums.length + 1}, () => [])

        for (const [val, freq] of Object.entries(count)) {
            arr[freq].push(Number(val))
        }

        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[j].length > 0) {
                res.push(...arr[j])
            }

            if (res.length === k) break
        }

        return res
    }
}
