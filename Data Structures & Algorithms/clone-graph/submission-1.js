/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null
        const map = {}

        function dfs(n) {
            if (map[n.val]) {
                return map[n.val]
            }
            const newNode = new Node()

            map[n.val] = newNode

            newNode.val = n.val
            const neighbors = n.neighbors

            if (neighbors && neighbors.length > 0) {
                for (const neighbor of neighbors) {
                    if (map[neighbor.val]) {
                        newNode.neighbors.push(map[neighbor.val])
                    } else {
                        newNode.neighbors.push(dfs(neighbor))
                    }
                }
            }

            return newNode
        }

        return dfs(node);
    }
}
