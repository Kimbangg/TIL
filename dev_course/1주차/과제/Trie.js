class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = "*";
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) node[char] = {};
      node = node[char];
    }
    node[this.endOfWord] = word;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) return false;
      node = node[char];
    }
    return this.endOfWord in node;
  }

  autoComplete(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!(char in node)) return []; // No results
      node = node[char];
    }

    function* recur(prefix, node) {
      for (const char in node) {
        if (char == "*") {
          yield prefix;
        } else {
          yield* recur(prefix + char, node[char]);
        }
      }
    }

    return Array.from(recur(prefix, node));
  }
}

const trie = new Trie();
trie.insert("b");
trie.insert("ba");
trie.insert("be");
trie.insert("bad");
trie.insert("bazedqw");
console.log(trie.autoComplete("ba"));
console.log(trie.search("be"));
