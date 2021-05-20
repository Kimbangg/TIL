## **1\. 머릿말**

알고리즘 문제들을 풀면서, Splice와 Slice에 대해서 항상 헷갈리면서 사용을 하다가 이번 기회로 제대로 정리하고자 글을 작성하게 되었습니다 ! 본 내용은 MDN 의 내용을 기반으로 작성되어, 조금 더 이해가 쉬운 방식으로 글을 쓰기 위해 노력을 하였습니다 :)

## **2\. Splice()**

arr.Splice ( 시작점, 몇 개, 무엇을 )

Splice가 받아서 처리 할 수 있는 Parameter는 위에 적어 놓은 것처럼 크게 3가지라고 생각하시면 좋습니다.

시작점 => 어디서 Splice를 시작하는지 ?

어디까지 => 시작점 +  Parameter Value 까지 Splice

무엇을 =>  값이 있으면 ? Splice된 곳에 삽입 || 값을 변경 : 삽입

예시 코드

```
const months = ["Jan", "March", "April", "June"];


months.splice(2, 0, "hi");
// output : [ 'Jan', 'March', 'donghyeon', 'April', 'June' ]


months.splice(2, 1, "hi");
// output :  [ 'Jan', 'March', 'donghyeon', 'June' ]


months.splice(2, 2, "donghyeon");
// output : [ 'Jan', 'March', 'donghyeon' ]

months.splice(2, 2, "donghyeon", "hi");
// output : [ 'Jan', 'March', 'donghyeon', 'hi' ]

months.splice(2, 2, "donghyeon", "hi", "hello");
// output : [ 'Jan', 'March', 'donghyeon', 'hi', 'hello' ]
```

## **3\. Slice()**

**slice()**메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.  원본 배열은 바뀌지 않습니다.

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals)
// expected output: ['ant', 'bison', 'camel', 'duck', 'elephant'];
```
