var Trie = function () {
  this.root = { isWord: false, next: {} };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;

  for (let i = 0; i < word.length; i += 1) {
    if (!cur.next[word[i]]) {
      cur.next[word[i]] = { isWord: false, next: {} };
    }
    cur = cur.next[word[i]];
  }

  cur.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;

  for (let i = 0; i < word.length; i += 1) {
    if (!cur.next[word[i]]) {
      return false;
    }
    cur = cur.next[word[i]];
  }

  return cur.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;

  for (let i = 0; i < prefix.length; i += 1) {
    if (!cur.next[prefix[i]]) {
      return false;
    }
    cur = cur.next[prefix[i]];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
