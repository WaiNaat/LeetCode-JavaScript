/*
단어 길이가 짧으니까 next를 dict 형식이 아니라 배열로 해도 될듯함
*/
const WILDCARD = '.';
const CODE_a = 'a'.charCodeAt(0);

class Node {
  constructor() {
    this.isWord = false;
    this.next = new Array(26).fill(null);
  }
}

var WordDictionary = function () {
  this.root = new Node();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.root;

  for (let i = 0; i < word.length; i += 1) {
    const idx = word.charCodeAt(i) - CODE_a;
    if (cur.next[idx] === null) {
      cur.next[idx] = new Node();
    }
    cur = cur.next[idx];
  }

  cur.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.traverse(word, this.root, 0);
};

WordDictionary.prototype.traverse = function (word, root, idx) {
  if (root === null) {
    return false;
  }

  if (idx === word.length) {
    return root.isWord;
  }

  if (word[idx] === WILDCARD) {
    for (let i = 0; i < root.next.length; i += 1) {
      const result = this.traverse(word, root.next[i], idx + 1);
      if (result) {
        return true;
      }
    }
    return false;
  }

  const charIdx = word.charCodeAt(idx) - CODE_a;
  return this.traverse(word, root.next[charIdx], idx + 1);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
