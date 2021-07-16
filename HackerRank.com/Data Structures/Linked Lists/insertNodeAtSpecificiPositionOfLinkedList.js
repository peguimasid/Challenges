function insertNodeAtPosition(llist, data, position) {
  const newNode = new SinglyLinkedListNode(data);

  if (!llist) {
    llist = newNode;
    return llist;
  }

  const trueHead = llist;

  let count = 0;
  let currNode = llist;
  let prevNode = null;

  while (count !== position) {
    prevNode = currNode;
    currNode = currNode.next;
    count++;
  }

  prevNode.next = newNode;
  newNode.next = currNode;

  console.log(trueHead);

  return trueHead;
}
