class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0

        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const profit = prices[j] - prices[i]

                res = Math.max(res, profit)
            }
        }

        return res
    }
}
