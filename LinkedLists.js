function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function(head) {
   // set the current 
   // then const the next 
   // set the prev 
   // then swap 

   let current = head;
   let prev = null;

   while (current) {
       const next = current.next;
       current.next = prev;
       prev = current;
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