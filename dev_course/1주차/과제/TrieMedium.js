class PrefixTreeNode {
  constructor(value) {
    this.children = {};
    this.endWord = null;
    this.value = value;
  }
}

class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }

  addWord(string) {
    const addWordHelper = (node, str) => {
      if (!node.children[str[0]]) {
        node.children[str[0]] = new PrefixTreeNode(str[0]);
        if (str.length === 1) {
          node.children[str[0]].endWord = 1;
        }
      } else {
      }
      if (str.length > 1) {
        addWordHelper(node.children[str[0]], str.slice(1));
      }
    };
    addWordHelper(this, string);
  }

  predictWord(string) {
    var getRemainingTree = function (string, tree) {
      var node = tree;
      while (string) {
        node = node.children[string[0]];
        string = string.substr(1);
      }
      return node;
    };

    var allWords = [];

    var allWordsHelper = function (stringSoFar, tree) {
      for (let k in tree.children) {
        const child = tree.children[k];
        var newString = stringSoFar + child.value;
        if (child.endWord) {
          allWords.push(newString);
        }
        allWordsHelper(newString, child);
      }
    };

    var remainingTree = getRemainingTree(string, this);
    if (remainingTree) {
      allWordsHelper(string, remainingTree);
    }

    return allWords;
  }

  logAllWords() {
    console.log("------ ALL WORDS IN PREFIX TREE -----------");
    console.log(this.predictWord(""));
  }
}
