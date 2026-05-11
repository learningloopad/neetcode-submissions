class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1)
        let prefix = 1
        let suffix = 1

        for (let i = 1; i < nums.length; i++) {
            prefix *= nums[i - 1]
            res[i] *= prefix
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            suffix *= nums[j + 1]
            res[j] *= suffix
        }

        return res
    }
}
