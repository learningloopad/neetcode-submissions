class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length <= 1) return 0
        let l = 0
        let r = 1
        let maxP = 0

        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                const profit = prices[r] - prices[l]

                maxP = Math.max(maxP, profit)
                r++
            } else {
                l = r
                r++
            }
        }

        return maxP
    }
}
