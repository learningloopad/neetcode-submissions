class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeftHeight = 0
        let maxRightRight = 0
        let left = 0
        let right = height.length - 1
        let max = 0

        while (left < right) {
            console.log({ left, right, maxLeftHeight, maxRightRight })
            maxLeftHeight = Math.max(maxLeftHeight, height[left])
            maxRightRight = Math.max(maxRightRight, height[right])

            if (height[left] < height[right]) {
                const water = Math.min(maxLeftHeight, maxRightRight) - height[left]

                max += water
            } else {
                const water = Math.min(maxLeftHeight, maxRightRight) - height[right]

                max += water
            }

            if (height[left] < height[right]) {
                left++
            } else {
                right--
            }
        }

        return max
    }
}
