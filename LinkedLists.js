function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function(head) {
   let current = head;// set the current 
   let prev = null;

   while (current) {
       const next = current.next;// then const the next 
       current.next = prev;   // set the prev 
       prev = current;   // then swap 
       current = next;
   } 
   return prev;
};

// console.log(reverseList([1,2,3,4,5])); // [5,4,3,2,1]

var mergeTwoListsRecursive = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
};

var mergeTwoLists = function(list1, list2) {
    let tempNode = new ListNode(0, null)
    let currentNode = tempNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2

    return tempNode.next;
}

var hasCycle = function(head) {
    let fast = head;

    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next;
        if (head === fast) return true
    }
    return false
}; 

var reorderList = function(head) {
    let slow = head; // finds middle - by moving 'fast' twice, we'll have 'slow' in the middle when fast finishes 
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null; // reverses second half of head using 'slow' 
    let current = slow.next;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    slow.next = null;

    let h1 = head; // combines the two halves 
    let h2 = prev;

    while (h2) { // if even, second half will be smaller 
        let temp = h1.next;
        h1.next = h2;
        h1 = h2
        h2 = temp
    }
};

// head: 1 -> 2 -> 3 -> 4 -> 5
// h1: 1 -> 2 -> 3
// h2: 5 -> 4
// head: 1 -> 5 -> 2 -> 4 -> 3

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head; // 2 pointers
    
    for (let i = 0; i < n; i++) fast = fast.next; // moves the fast pointer n nodes ahead of slow

    if (!fast) return head.next; // if null then node to be removed is the head 

    while (fast.next) fast = fast.next, slow = slow.next; // moves pointers 1 node until fast end, slow will point removed node 

    slow.next = slow.next.next; // skips the n node 

    return head
};