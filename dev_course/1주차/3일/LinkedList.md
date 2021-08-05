## 1. 연결 리스트의 특징
  </br>

  - 메모리가 허용하는한 요소를 제한없이 추가 할 수 있다.
    - 배열과 다르게, 메모리가 연속적으로 저장 되어 있지 않기 때문이다.      
    <br>
   - 탐색은 O(n)이 소요됩니다.
     - 인덱스가 존재 하지 않기 때문에, 찾는 대상을 만날 때까지 순회를 해야합니다.   
    <br>
   - 요소를 추가하거나 제거 할 때는 O(1)이 소요됩니다.    
     - 단, 요소의 추가와 삭제를 위해서는 장소의 탐색이 발생하기에 이 작업을 최소화 하는 것이 중요합니다.     
    <br>
   - 링크드 리스트의 유형으로는 [Single, Double, Circular] 총 3가지가 존재합니다. 
  
</br></br>

  ## 2. 배열과의 차이점 
  </br>
  - 배열과 연결 리스트의 가장 큰 차이점은 메모리에서 발생합니다.
    - 연결 리스트는 산발적, 배열은 연속적으로 이루어져있습니다.
  - 배열은 연속적인 메모리 구조를 가지고 있기에, 삽입과 삭제를 하는 경우 선형 시간 (O(n))이 발생합니다.

</br></br>

## 3. 단일 연결 리스트 

</br>
  
각 노드는 자신의 값과 다음 노드를 가리키는 next 함수를 가지고 있습니다.

``` javascript

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

``` 
</br>

탐색은 헤드에서 시작해서 원하는 값을 찾을 때까지 순회합니다. => O(n) 

</br>

``` javascript

find(value) {
  let curNode = this.head;

  while ( curNode.value !== value ) {
    curNode = curNode.next
  }
  return curNode;
}

``` 

</br>


append 연산은 연결 리스트의 끝에 새로운 값을 추가합니다.

</br>


``` javascript

append(value) {
  const newNode = new Node(value);
  // 값이 비어 있는 경우,
  if ( this.head === null ) { // 새로운 값을 head & tail로 설정합니다.
    this.head = newNode;
    this.tail = newNode;
  } 
  
  else { 
    this.tail.next = newNode; // 테일 뒤에 값을 붙이고
    this.tail = newNode; // 새로운 값을 끝 값으로 변경합니다.
  }
}

```
</br>


특정 위치 뒤에, 값을 추가하는 Method

</br>


``` javascript

insert(node, newValue) { // 특정 위치 뒤에, 값을 추가하는 Method
  const newNode = new Node(newValue);
  newNode.next = node.next;
  node.next = newNode;
}

```

</br>


삭제 하려고 하는 연산과 만날 떄 까지 이동하여, 다다음을 next로 변경해줍니다.

</br>


``` javascript
  remove(value) {
    let prevNode = this.head;

    while ( prevNode.next.value !== value ) {
      prevNode = prevNode.next;
    }

    if ( prevNode.next !== null ) {
      prevNode.next = prevNode.next.next;
    }
  } 
```