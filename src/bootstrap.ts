/**
 * Node structure in condition tree.
 */
interface ConditionTreeNode {
    condition: () => boolean; // A function that returns true or false.
    value: () => void;       // A function that performs some action.
    children: ConditionTreeNode[];  // Other conditions that are checked if this one is false.
}

/**
 * Evaluates conditions in a tree structure until it finds one that is true, then executes the associated function.
 * @param {ConditionTreeNode} node - The current node in the condition tree.
 * @returns {void}
 */
function conditionTree(node: ConditionTreeNode): void {
    if (node.condition()) {
        node.value();
    } else {
        for (let child of node.children) {
            conditionTree(child);
        }
    }
}

export {
    conditionTree,
    ConditionTreeNode
}