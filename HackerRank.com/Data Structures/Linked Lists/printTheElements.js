function printLinkedList(head) {
  console.log(head.data);
  if (head.next) printLinkedList(head.next);
}

console.log(
  printLinkedList({
    data: 16,
    next: { data: 13, next: null },
  })
);
