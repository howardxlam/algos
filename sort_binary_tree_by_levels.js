/*
You are given a binary tree:

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children(from left to right) are second and third, and so on.

Return empty array if root is null.

    Example 1 - following tree:

2
8        9
1  3     4   5
Should return following list:

[2, 8, 9, 1, 3, 4, 5]
Example 2 - following tree:

1
8        4
3        5
7
Should return following list:

[1, 8, 4, 3, 5, 7]
*/


function treeByLevels(rootNode) {
    if (rootNode === null) {
        return [];
    }

    const result = [];
    const queue = [rootNode];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);

        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }

    return result;
}

/*
const chai = require("chai");
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;


function stringifyTree (tree) {
    if (tree === null)
        return 'null';

    let string = '';

    function printNode (node = tree, depth = 0) {
        if (node === null)
            return;
        string += '----'.repeat(depth) + node.value + '\n';
        printNode(node.left,  depth + 1);
        printNode(node.right, depth + 1);
    }
    printNode();
    return string;
}

function doTest (tree, expected) {
    const log = stringifyTree(tree);
    const actual = treeByLevels(tree);
    deepEqual(actual, expected, `for tree:\n${log}\n`);
}

describe("Tests suite", function() {
    it("sample tests", function() {
        doTest(null, []);

        const treeOne =
      new Node(2,
        new Node(8,
          new Node(1),
          new Node(3)
        ),
        new Node(9,
          new Node(4),
          new Node(5)
        )
        );

        doTest(treeOne, [2,8,9,1,3,4,5]);

        const treeTwo =
        new Node(1,
            new Node(8,
                null,
                new Node(3)
            ),
            new Node(4,
                null,
                new Node(5,
                    null,
                    new Node(7)
                )
            )
        );

        doTest(treeTwo, [1,8,4,3,5,7]);

    });
});
*/