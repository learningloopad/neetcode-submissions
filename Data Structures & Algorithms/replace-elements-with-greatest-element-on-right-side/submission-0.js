class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -Infinity

        console.log('compare', -1 > -Infinity)

        for (let i = arr.length - 1; i >= 0; i--) {
            const currentMax = max

            if (arr[i] > max) {
                max = arr[i]
            }

            if (i === arr.length - 1) {
                arr[i] = -1
            } else {
                arr[i] = currentMax
            }

            
        }

        return arr
    }
}
