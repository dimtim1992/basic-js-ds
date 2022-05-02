const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addWithin(this.rootNode, value);

    function addWithin(node, value) {
      if(!node) {
        return new Node(value);
      }

      if(node.data === value) {
        return node;
      }

      if(value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.rootNode, value);

    function searchWithin(node, value) {
      if(!node) {
        return  false;
      }

      if(node.data === value) {
        return true;
      }

      return value < node.data ?
        searchWithin(node.left, value) :
        searchWithin(node.right, value);
    }
  }

  find(value) {
    return searchNodeWithin(this.rootNode, value);

    function searchNodeWithin(node, value) {
      if(node === null) {
        return null;
      }

      if(node.value === value) {
        return node;
      }

      if (value < node.data) {
        return searchNodeWithin(node.left, value);
      } else {
        return searchNodeWithin(node.right, value);
      }
      
    }
  }

  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);
    
    function removeNode(node, value) {
      if(node === null) {
        return null;
      }

      if(value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
    // let current = this.rootNode;
    // let prev = null;
    
    // return removeNode(this.rootNode, value);

    // function removeNode(node, value) {
    //   if(node === null) {
    //     return null;
    //   }

    //   if(node.value < value) {
    //     prev = current;
    //     current = node.right;
        
    //     return removeNode(node.right, value);
    //   } else if(node.value > value) {
    //     prev = current;
    //     current = node.left;
        
    //     return removeNode(node.left, value);
    //   } else {
    //     if (!node.left && !node.right) {
    //       prev.current = null;
    //       return current;
    //     }

    //     if (!node.left) {
    //       prev.current = current.right; 
    //       return current;
    //     }

    //     if (!node.right) {
    //       prev.current = current.left;
    //       return current;
    //     }

    //     let minFromRight = node.right;
    //     while(minFromRight.left) {
    //       minFromRight = minFromRight.left;
    //     }
    //     node.data = minFromRight.value;

    //     node.right = removeNode(node.right, minFromRight.value);

    //     return node;

    //   }
    // };
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

