class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  let result = '';
  let currentNode = list;

  while (currentNode) {
    result += `${currentNode.data} -> `;
    currentNode = currentNode.next;
  }
  result += 'null';

  return result;
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))));
