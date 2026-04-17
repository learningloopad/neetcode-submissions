class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const original = image[sr][sc]

        if (original === color) return image

        const m = image.length
        const n = image[0].length

        function dfs(i, j) {
            if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== original) return
            image[i][j] = color

            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
        }

        dfs(sr, sc)

        return image
    }
}
