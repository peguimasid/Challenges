const alphabet = 'abcdefghijklmnopqrstuvwxyz';

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null);
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currNode = this.root;

    for (const char of word) {
      const indexInAlphabet = alphabet.indexOf(char);
      if (!currNode[indexInAlphabet])
        currNode[indexInAlphabet] = new TrieNode();
      currNode = currNode[indexInAlphabet];
    }

    currNode.isEndOfWord = true;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currNode = this.root;

    for (const char of word) {
      const indexInAlphabet = alphabet.indexOf(char);
      if (!currNode[indexInAlphabet]) return false;
      currNode = currNode[indexInAlphabet];
    }

    return currNode.isEndOfWord;
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currNode = this.root;

    for (const char of prefix) {
      const indexInAlphabet = alphabet.indexOf(char);
      if (!currNode[indexInAlphabet]) return false;
      currNode = currNode[indexInAlphabet];
    }

    return true;
  }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); // return True
console.log(trie.search('app')); // return False
console.log(trie.startsWith('app')); // return True
trie.insert('app');
console.log(trie.search('app')); // return True
