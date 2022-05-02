const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
    // let current = this.head;
    // let prev;

    // while (current.next) {
    //   prev = current;
    //   current = current.next
    // }

    // return current;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if(this.length === 0) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
      // let current = this.head;
      // let prev;

      // while (current.next) {
      //   prev = current;
      //   current = current.next
      // }
      // current.next = node;
      // this.length++;
    }  
  }

  dequeue() {
    let current = this.head;
    let prev;

    while (current.next) {
      prev = current;
      current = current.next
    }

    if(prev === null) {
      if(current === null) {
        return null;
      } else {
        this.head = null;
        return this.head;
      }
    }

    prev.next = null;
    this.length--;
    return current.value;
  }
  // if(this.length === 0) {
  //   return null
  // } else if(this.length === 1) {
  //   this.length--;
  //   this.head = null;
  //   return this.head;
  // } else {
  //   let current = this.head;
  //   this.head = this.head.next;
  //   this.length--;
  //   return current.value;
  // }
}

module.exports = {
  Queue
};
