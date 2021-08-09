class Node {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    if (!word) return;

    let curNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!curNode.children.hasOwnProperty(char)) {
        curNode.children[char] = new Node(char);
      }

      curNode = curNode.children[char];
      if (i === word.length - 1) {
        curNode.isWord = true;
      }
    }
  }

  autocomplete(fragment) {
    if (!fragment) return; // 주어진 문자열이 적절 하지 않다면 곧바로 종료

    const result = [];
    let curNode = this.root;

    for (let i = 0; i < fragment.length; i++) {
      const char = fragment[i];

      if (!curNode.children.hasOwnProperty(char)) {
        console.log("해당 문자는 트라이 내부에 존재 하지 않습니다.");
        return;
      }

      curNode = curNode.children[char];

      if (i === fragment.length - 1) {
        // 주어진 문자열 끝에 도달했으면
        const queue = [];
        queue.push([curNode, fragment]);

        while (queue.length) {
          // bfs 수행
          const element = queue.shift();
          const node = element[0];
          const word = element[1];

          ß;

          for (const j in node.children) {
            const child = node.children[j];
            queue.push([child, word + child.value]);
          }
        }
      }
    }
    if (result.length === 0) {
      console.error(
        "해당 단어로 만들 수 있는 문자가 트라이 내부에 존재 하지 않습니다."
      );
      return;
    } else {
      console.log(result);
      return;
    }
  }
}

const trie = new Trie();
trie.insert("help");
trie.insert("heap");
trie.autocomplete("he");
trie.insert("dopa");
trie.autocomplete("dp");
