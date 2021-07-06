function insertNodeAtTail(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (!head) {
    head = newNode;
    return head;
  }

  const trueHead = head;

  while (head.next) {
    head = head.next;
  }

  head.next = newNode;

  console.log(trueHead);

  return trueHead;
}
