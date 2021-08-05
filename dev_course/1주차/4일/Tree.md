
## 1. 트리(Tree)란?
<br>
-  이전에 다뤄왔던 것들과는 다르게 "비선형" 구조인 계층 구졸르 가진 자료구조입니다.  <br>
-  여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타날 때 사용됩니다.


<br><br><br>

##  2. 용어정리(트리)
<br>
- 루트(Root) : 가장 상위에 있는 노드를 뜻합니다.
 <br><br>
- 노드(Node) ; 트리 안에 들어있는 각 항목을 말합니다.
 <br><br>
- 리프(Leaf) : 자식이 없는 가장 끝에 있는 노드를 의미합니다.
  
<br><br><br>

## 3. 트리의 특징

<br>

- left = index * 2    

- right = index * 2 + 1    

- parent = floor(index / 2)
  
<br>
  
## 4. 트리의 종류

<br>


### 4-1-1 이진트리
정점이 최대 2개의 자식을 가지는 트리를 의미한다.
완전 이진트리는 리프 노드를 제외하고 모든 정점이 채워져있음
마지막도 채워져있다면, 포화 이진 트리라고 한다.

<br>

### 4-1-2 이진트리의 특징
<br>

N개의 정점을 가진 편향 트리가 될 수 있다.
정점이 N개인 포화 또는 완전 이진 트리의 높이는 로그 N이다.
높이가 h인 포화 이진 트리는 2^h -1 개의 정점을 가진다.


<br><br>

## 5. 기본 트리 구현

<br>

``` javascript
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) =>
      child.data === data ? false : true
    );
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("c");
t.root.children[0].add("d");
```
<br>

## 6. 이진 탐색 트리 구현
   

<br>


``` javascript

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  } 
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    
    if ( this.root === null ) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while ( currentNode !== null ) {
      
      if ( currentNode.value > value ) {
        if ( currentNode.left === null ) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if ( currentNode.right === null ) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }

  }

  has(value) {
    let currentNode = this.root;

    while ( currentNode !== null ) {
      if ( currentNode.value === value ) {
        return true;
      }

      if ( currentNode.value < value ) {
        currentNode = currentNode.right;
      } else{
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

```