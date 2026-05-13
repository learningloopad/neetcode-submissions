class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length < 1) return 0
        let longest = 1
        const set = new Set(nums)

        function checkPrevious(num, count) {
            if (set.has(num)) {
                count += 1
                longest = Math.max(longest, count)

                checkPrevious(num - 1, count)
            }
        }

        for (const num of set) {
            let count = 1
            checkPrevious(num - 1, count)
        }

        return longest
    }
}
