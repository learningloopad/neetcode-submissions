class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}

        for (const str of strs) {
            const count = Array.from({length: 26}, () => 0)

            for (const c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join('-')

            if (map[key]) {
                map[key].push(str)
            } else {
                map[key] = [str]
            }
        }

        return Object.values(map)
    }
}
