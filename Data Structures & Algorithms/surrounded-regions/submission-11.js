class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length
        const n = board[0].length

        if (m <= 1 || n <= 1) return

        const nodesNotSurrounded = new Set()

        function dfs(i, j) {
            if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === 'O' && !nodesNotSurrounded.has(`${i}-${j}`)) {
                // console.log({i, j})
                nodesNotSurrounded.add(`${i}-${j}`)

                dfs(i + 1, j)
                dfs(i - 1, j)
                dfs(i, j + 1)
                dfs(i, j - 1)
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== 0 && i !== m - 1 && j !== 0 && j !== n - 1) continue
                // console.log({i ,j, cell: board[i][j]})
                if (board[i][j] === 'O' && !nodesNotSurrounded.has(`${i}-${j}`)) {
                    // console.log({i, j})
                    dfs(i, j)
                }
            }
        }
        // console.log({nodesNotSurrounded})

        for (let i = 1; i < m - 1; i++) {
            for (let j = 1; j < n - 1; j++) {
                if (board[i][j] === 'O' && !nodesNotSurrounded.has(`${i}-${j}`)) {
                    board[i][j] = 'X'
                }
            }
        }
    }
}
