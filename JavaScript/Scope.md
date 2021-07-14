## **스코프란? **

스코프는 코드가 유효한 범위를 의미합니다.

이를 조금 더 자세히 이야기 해보자면, 식별자(=변수이름, 함수 이름, 클래스 이름) 가 본인이 선언된 위치에 따라 다른 코드에서 참조될 수 있는지 없는지를 결정하는 것을 의미합니다.

이를 아래의 코드를 통해 설명 해보겠습니다.

```
function add(x,y) {

    console.log(x, y); // 2, 3

    return x + y;
}

add(2,3); // 5

console.log(x,y) // Reference Error : x is not defined
```

2,3 은 함수로 전달이 되어 x, y라는 지역 변수에 저장이 된다. 그렇기 때문에 함수 내에서는 자유롭게 사용이 가능합니다.

반면 함수 바깥에서 x,y 를 호출하면 에러가 발생하는데, 이 때 저장된 x,y는 함수 내부에 존재 하기 때문에 외부에서 호출 할 수 없습니다.

그렇다면 전역 변수와 지역 변수의 이름이 같다면 어떻게 될까요? 아래의 예시를 통해 다뤄보겠습니다.

```
let x = 'global';

function foo() {
	let x = "local";
	console.log(x);
}

foo(); // local

console.log(x); // global
```

위의 코드를 보면 전역 및 지역 변수로 선언된 변수의 이름이 같습니다. 하지만, 출력은 다르게 되는데요.  그 이유는, 범위가 다르면 "별도의 스코프" 에 저장 하기 때문입니다.

[##_Image|kage@FF9qQ/btq9s3BQYV4/BK4YDxzLiISymzMqkSCjkk/img.jpg|alignCenter|data-origin-width="1280" data-origin-height="525" data-filename="KakaoTalk_Photo_2021-07-13-22-20-38.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

## **스코프 체인이란**

스코프 체인이란 각각의 스코프가 계층적으로 연결 되어 있는 것을 의미합니다.

자바스크립트는 이 스코프체인을 이용하여, 변수를 참조하는데요. 아래의 예시를 보면서 이야기 해보겠습니다.

```
var x = "global x";
var y = "global y";

function outer() {

    let z = "outer's local z";

    console.log(x); // global x
    console.log(y); // global y
    console.log(z); // outer local z

    function inner() {

      var x = "inner's local x";

      console.log(x); // inner's local x
      console.log(y); // global y
      console.log(z); // outer local z

    }

    inner();

}

outer();

console.log(x) // global x
console.log(z) // not defined
```

위의 코드를 보면 outer => inner() 순으로 함수를 호출 합니다.

### **\[1\] outer 함수**

outer 함수가 호출이 되면, 함수가 console.log가 포함 하고 있기 떄문에 inner를 호출 하기 전에 모두 출력을 해줍니다.

이 때, 스코프를 탐색을 해야 하는데 outer 스코프에는 "x" 라는 하나의 변수 만을 포함 하고 있습니다.  그렇다면, not defined 가 떠야 할 것 같지만 실제로 자바스크립트는 상위 스코프에 있는 변수까지 탐색을 합니다.

그렇게 됬을 때, "전역  스코프"에 x, y가 모두 있어서 그 값을 출력합니다.

[##_Image|kage@mzKrT/btq9sIYALpv/k5GZ9dTkScbZsskJKC8Jc1/img.jpg|alignCenter|data-origin-width="959" data-origin-height="1280" data-filename="KakaoTalk_Photo_2021-07-13-22-36-46 001.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

### **\[2\] inner 함수**

inner 함수가 호출되면, 마찬가지로 자신이 해당한 스코프부터 탐색을 하는데요. 그렇기 떄문에 위의 예시와 같이 출력됩니다.

[##_Image|kage@bmntqD/btq9t5TkgCX/moCHPoQLmqw3RS3uiZbsNk/img.jpg|alignCenter|data-origin-width="959" data-origin-height="1280" data-filename="KakaoTalk_Photo_2021-07-13-22-36-47 002.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

## **스코프 분류**

### **1\. 레벨**

스코프는 레벨에 따라 분류가 될 수 있는데, 대부분의 언어에서는 "블록 레벨 스코프"를 사용하고, 자바스크립트에서는 "함수 레벨 스코프"를 사용합니다. 하지만, let & const가 도입이 되며 블록 레벨 스코프도 사용을 합니다.

[##_Image|kage@RYCq4/btq9C9AI3Or/EAwuk5evUsJbdBatqRCHmK/img.png|alignCenter|data-origin-width="1522" data-origin-height="700" data-filename="스크린샷 2021-07-14 오후 6.41.29.png" data-ke-mobilestyle="widthOrigin"|||_##]

### **2\. 동적 vs 정적 스코프**

상위 스코프가 "언제" 결정 되는지에 따라 스코프를 분류하는데요.

프로그램 런타임 도중에, 실행 & 호출 컨텍스트에 의해 결정되며 동적 스코프라고 합니다.

반면 함수가 정의되는 시점에 스코프가 결정되면 정적 스코프라고합니다. (=> 자바스크립트는 정적 스코프 ! )

\*\*자바스크립트에서 함수는 태어나면 본인의 내부슬롯에 상위 스코프에 대한 참조를 저장합니다

[##_Image|kage@bbToRu/btq9xL2qGuw/y9e0OL2PunlfKV7ROVNYK0/img.png|alignCenter|data-origin-width="1432" data-origin-height="630" data-filename="스크린샷 2021-07-14 오후 6.39.08.png" data-ke-mobilestyle="widthOrigin"|||_##]

### **함수의 호출 과정**

렉시컬 환경 : 코드가 어디서 실행되고, 주변에 어떤 코드가 있는지 저장 하고 있음.

[##_Image|kage@QY5oG/btq9ymOO0yW/qmHdnNdjb3tVCTEXExHLzk/img.png|alignCenter|data-origin-width="1132" data-origin-height="670" data-filename="스크린샷 2021-07-14 오후 6.43.48.png" data-ke-mobilestyle="widthOrigin"|||_##]

## **클로저**

클로저는 상위 함수가 실행 컨텍스트에서 사라졌음에도 불구하고, 내부 함수가 상위 함수의 값을 참조 할 수 있는 상황을 의미합니다.

예시 ( with Lexical Scope  & 실행 Context )

1\. 아우터는 호출이 되면, 실행 컨텍스트 스택에 담깁니다.

2\. 아우터 함수는 중첩 함수인 inner를 변수에 반환 -> poped

3\. variable 은 아우터의 렉시컬을 참조하여 10을 반환

```
const x = 1;

function outer() {

  const x = 10;

  const inner = function() {
    console.log(x);
  }

  return inner;

}

const outer_variable = outer();
outer_variable();
```

### \*\*클로저 렉시컬 환경

\*\*

[##_Image|kage@c1NxOB/btq9DuR68Ku/NEwjOtwLKBXalJQEGE1BX1/img.png|alignCenter|data-origin-width="1348" data-origin-height="684" data-filename="스크린샷 2021-07-14 오후 6.45.43.png" data-ke-mobilestyle="widthOrigin"|||_##]

Outer 함수가 실행 컨텍스트에서 pop 됬을 때, 값을 어떻게 참조하는지에 대한 그림.

[##_Image|kage@y3oaf/btq9zFAms0D/QXnKVkOmFfikwXLavKlKck/img.png|alignCenter|data-origin-width="1350" data-origin-height="658" data-filename="스크린샷 2021-07-14 오후 6.45.59.png" data-ke-mobilestyle="widthOrigin"|||_##]

참조 :D

[https://www.youtube.com/watch?v=PVYjfrgZhtU](https://www.youtube.com/watch?v=PVYjfrgZhtU)
