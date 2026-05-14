class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        const sorted = nums.sort((a, b) => a - b)
        let i = 0

        while (i < sorted.length - 2) {
            let l = i + 1
            let r = sorted.length - 1

            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r]

                if (sum < 0) {
                    l++
                } else if (sum > 0) {
                    r--
                } else {
                    res.push([sorted[i], sorted[l], sorted[r]])

                    let nextL = l + 1

                    while (sorted[nextL] === sorted[l]) nextL++

                    l = nextL
                }
            }
            
            let nextI = i + 1

            while(sorted[nextI] === sorted[i]) nextI++

            i = nextI
        }

        return res
    }
}
