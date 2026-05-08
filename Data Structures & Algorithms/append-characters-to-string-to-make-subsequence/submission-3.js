class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let index = 0
        let substr = ''

        for (let c of t) {
            let found = false
            for (let i = index; i < s.length; i++) {
                if (c === s[i]) {
                    console.log({c, i, index})
                    index = i + 1
                    substr += c
                    found = true
                    break
                }
            }

            if (found === false) break
        }
        return t.length - substr.length
    }
}
