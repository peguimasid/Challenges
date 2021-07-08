function insertNodeAtHead(head, data) {
  const newNode = new SinglyLinkedListNode(data);

  if (!head) {
    head = newNode;
    return head;
  }

  newNode.next = head;
  head = newNode;

  return newNode;
}
