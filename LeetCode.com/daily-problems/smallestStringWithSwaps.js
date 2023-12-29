const swap = (i, j, s) => {
  const arr = [...s];
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join('');
};

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
const smallestStringWithSwaps = (s, pairs) => {
  let adjacencyList = {};
  for (let i = 0; i < s.length; i++) adjacencyList[i] = [];
  for (const [a, b] of pairs) {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }

  let result = Array(s.length);
  let visited = new Array(s.length).fill(false);
  let str = [];
  let idx = [];
  const dfs = (node) => {
    visited[node] = true;
    idx.push(node);
    str.push(s[node]);
    for (let next of adjacencyList[node]) {
      if (!visited[next]) dfs(next);
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (!visited[i]) {
      str = [];
      idx = [];
      dfs(i);
      idx.sort((a, b) => a - b);
      str.sort();
      console.log(i);
      console.log(str);
      console.log(idx);
      console.log('\n');
      for (let j = 0; j < str.length; j++) {
        result[idx[j]] = str[j];
      }
    }
  }

  return result.join('');
};

// "deykuy"
console.log(
  smallestStringWithSwaps('udyyek', [
    [3, 3],
    [0, 3],
    [1, 5],
    [1, 5],
    [3, 4],
    [3, 5],
  ])
);
