class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set())
        const columns = Array.from({ length: 9 }, () => new Set())
        const blocks = new Map()

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const blockKey = `${Math.floor(Number(i)/3)}-${Math.floor(Number(j)/3)}`
                const block = blocks.get(blockKey)

                if (rows[i].has(board[i][j]) || columns[j].has(board[i][j]) || (block && block.has(board[i][j]))) {
                    // console.log({ i, j, rows, columns, blocks })
                    return false
                }

                if (board[i][j] !== '.') {
                    rows[i].add(board[i][j])
                    columns[j].add(board[i][j])

                    if (!block) {
                        blocks.set(blockKey, new Set([board[i][j]]))
                    } else {
                        blocks.set(blockKey, block.add(board[i][j]))
                    }
                }

            }
        }

        return true
    }
}
