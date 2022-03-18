class BinarySearchTree {
  /**
   *
   *  5
   * / \
   *2   6
   / \   \
  4   3   7
   *
   *
   */
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  insert(value) {
    let binaryTree = new BinarySearchTree(value);
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = binaryTree;
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = binaryTree;
      }
    }
  }
  
module.exports = BinarySearchTree
