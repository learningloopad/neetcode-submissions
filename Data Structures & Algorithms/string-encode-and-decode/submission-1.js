class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''

        for (let str of strs) {
            const length = str.length

            res += `${length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let res = []

        while (i < str.length) {
            for (let j = i; j < str.length; j++) {
                if (str[j] === '#') {
                    const length = Number(str.slice(i, j))

                    const word = str.slice(j + 1, j + length + 1)
                    res.push(word)
                    i = j + length + 1
                    break
                }
            }
        }

        return res
    }
}
