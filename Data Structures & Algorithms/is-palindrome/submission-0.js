class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 1) return true
        const cleanText = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
        let isPalindrome = true

        for (let i = 0; i < cleanText.length/2; i++) {
            const opposite = cleanText.length - 1 - i

            if (cleanText[i] !== cleanText[opposite]) {
                isPalindrome = false
                break
            }
        }

        return isPalindrome
    }
}
