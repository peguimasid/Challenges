function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeZeroSumSublists(head) {
  const dummy = new ListNode(0);
  dummy.next = head;

  const prefixSums = new Map([[0, dummy]]);

  let prefixSum = 0;
  let current = head;

  while (current) {
    prefixSum += current.val;

    // if the current prefix sum exists in the hashmap
    if (prefixSums.has(prefixSum)) {
      let to_delete = prefixSums.get(prefixSum).next;
      let temp_sum = prefixSum + to_delete.val;

      // remove nodes with zero sum
      while (to_delete !== current) {
        delete prefixSums[temp_sum];
        prefixSums.delete(temp_sum);
        to_delete = to_delete.next;
        temp_sum += to_delete.val;
      }

      // adjust pointers to remove the zero sum nodes
      prefixSums.get(prefixSum).next = current.next;
    } else {
      // add the prefix sum node to the hashmap
      prefixSums.set(prefixSum, current);
    }

    current = current.next;
  }

  return dummy.next;
}

// prettier-ignore
const head = new ListNode(1, new ListNode(2, new ListNode(-3, new ListNode(3, new ListNode(1)))));
console.log(removeZeroSumSublists(head)); // 3 -> 1

// prettier-ignore
const head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(4)))));
// console.log(removeZeroSumSublists(head2)); // 1 -> 2 -> 4

// prettier-ignore
const head3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(-2)))));
// console.log(removeZeroSumSublists(head3)); // 1
