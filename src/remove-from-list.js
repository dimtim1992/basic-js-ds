const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

 function removeKFromList(l, k) {
  // for(let i = 0; i < l.length; i++) {
  //   if(l[i] === k) {
  //     l.splice(l[i], 1);
  //   }
  // }
  // return l;
  let current = l;
  let prev = null;
  let actualLink = l;

  // if(current.value === k) {
  //   l = l.next; 
  // }

  while(current.next) {
      console.log('prevLoop', prev);
      console.log('currentLoop', current);
    if(current.value === k) {
      if(prev === null) {
        prev = current;
        current = current.next;
        
        actualLink = current;
        prev.next = null;
        prev = null;
          
          console.log('prev', prev);
          console.log('currentTest', current);
      } else {
        prev.next = current.next;
        current = current.next; 
          
      }
    } else {
      prev = current;
      current = current.next;
    }
  }

    console.log('prev', prev);
    console.log('current', current);

  if(current.value === k) {
      if(prev) {prev.next = null} else {actualLink = null}
    
  } 

  return actualLink;
}

module.exports = {
  removeKFromList
};
