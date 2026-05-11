class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const split = s.split(' ').filter((w) => Boolean(w))

        return split[split.length - 1].length
    }
}
