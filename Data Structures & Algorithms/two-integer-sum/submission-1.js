class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sorted = []
        for (let i = 0; i < nums.length; i++) {
            sorted.push([nums[i], i])
        }

        sorted.sort((a, b) => a[0] - b[0])

        let i = 0
        let j = sorted.length - 1

        while (i !== j) {
            if (sorted[i][0] + sorted[j][0] < target) {
                i++
            } else if (sorted[i][0] + sorted[j][0] > target) {
                j--
            } else {
                return [sorted[i][1], sorted[j][1]]
            }
        }
    }
}
