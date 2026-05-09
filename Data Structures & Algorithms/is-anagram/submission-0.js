class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map()
        const mapT = new Map()

        for (const c of s) {
            const val = mapS.get(c)

            if (!val) {
                mapS.set(c, 1)
            } else {
                mapS.set(c, val + 1)
            }
        }

        for (const c of t) {
            const val = mapT.get(c)

            if (!val) {
                mapT.set(c, 1)
            } else {
                mapT.set(c, val + 1)
            }
        }

        if (mapS.size !== mapT.size) return false

        for (const [key, value] of mapS) {
            if (mapT.has(key) && mapT.get(key) === value) {
                continue
            } else {
                return false
            }
        }

        return true
    }
}
