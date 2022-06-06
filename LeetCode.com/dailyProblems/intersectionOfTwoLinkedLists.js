function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let b = [];

  while (headB) {
    b.push(headB);
    headB = headB.next;
  }

  let currentNode = headA;

  while (currentNode) {
    const findNode = b.find((node) => node === currentNode);
    if (findNode) return findNode;
    currentNode = currentNode.next;
  }

  return null;
};

const C = new ListNode('c1');
C.next = new ListNode('c2');
C.next.next = new ListNode('c3');

const A = new ListNode('a1');
A.next = new ListNode('a2');
A.next.next = C;

const B = new ListNode('b1');
B.next = new ListNode('b2');
B.next.next = new ListNode('b3');
B.next.next.next = C;

console.log(getIntersectionNode(A, B));

// Ve a profundidade da maior lista
// EX: list 1 tem 5 nos e a lista 2 tem 6

// Faz a maior lista começar no nó de index 1 (6 - 5)
// Faz as duas irem caminhando juntas e se encontrar uma que é igual, retorna
