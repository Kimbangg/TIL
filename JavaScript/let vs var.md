## **머릿말**

"let과 var의 차이는 스코프에 있다" 정도는 알고 있었지만, 어떠한 원리로 다르게 작동하는지 알지 못했습니다.

그러던 도중, "코드종" 님의 영상과 최근 보고 있는 "모던 자바스크립트 Deep Dive" 의 내용을 합쳐 보다 깊게 설명 해보고자 글을 작성하게 되었습니다.

## **스코프**

### **1-1.  var**

var의 스코프는 "함수" 로 정의가 됩니다.

```
function print_t() {

    {
    	var t = "안녕 나는 t";
    }

    console.log(t) // 안녕 나는 "t"

}
```

그렇기 때문에, 함수 -> "중괄호"  내부에서 t를 선언 하더라도, "t" 의 값이 출력이 됩니다.

### **1-2.  let**

반면에 let은 블록 레벨 스코프로 정의가 되어있습니다.

```
function print_t() {

    {
    	var t = "안녕 나는 t";
    }

    console.log(t) // t is not defined

}
```

그래서 위의 코드와는 다르게, not defined 라는 에러 메세지가 출력됩니다.

### **1-3. 심화 예제**

함수와 블록 스코프가 어떤 차이를 만들어 낼 수 있을까요? 심화된 예제를 바탕으로 이를 이해 해보겠습니다.

#### **\- var**

아래의 코드를 작동 시키면, 어떻게 출력이 이루어질까요? 코드를 작동 시키기 전에, 한번 생각해봅시다 :D

```
function countSeconds(len) {
  for (var i = 0; i <= len; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

countSeconds(5);
```

정답은 \[ 5, 5, 5, 5, 5\] 입니다. 왜 "5" 가 출력 되었는지 자바스크립트의 내부로 함께 들어가 이해 해보겠습니다.

자바스크립트는 하나의 콜스택을 가지고 있습니다. 작업을 수행하면서, 콜 스택 내부에서 처리 할 수 있는 문제면 자체적으로 이를 처리합니다.  하지만, 예시의 루프 속에 존재하는 setTimeOut 이라는 함수는 webAPI 이기 때문에 자체 처리가 불가능합니다.

따라서 콜스택은 setTimeOut에 초(second)를 담아서 setTimeOut 함수만을 호출하고 종료됩니다.

[##_Image|kage@bnT3Kn/btq9C9fRp0f/FbRjEK0quGmae6BkVpS3Y1/img.jpg|alignCenter|data-origin-width="1280" data-origin-height="761" data-filename="KakaoTalk_Image_2021-07-14-13-54-05.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

콜스택과 web api는 비동기적 즉, 별도의 스레드에서 작동이 됩니다. 그렇기 때문에 콜스택에 있는 작업이 실행 될 때도 web api에서는 주어진 초(second)를 카운트하고, 카운트가 종료되면 task queue에 작업을 넘깁니다.

task queue에 있는 작업은 event loop가 콜스택이 비어있는지 판단하여, 비어있으면 작업을 실행 시켜줍니다. 이 때, var로 선언된 I는 블록 스코프로써 하나의 값으로 인식이 되고 5를 출력 하게 됩니다.

#### **\- Let**

그렇다면 let은 어떻게 다를까요?

let은 중괄호를 기준으로 스코프가 발생 하기 때문에, 루프마다 새로운 스코프가 발생합니다.

```
function countSeconds(len) {
  for ( let i = 0; i <= len; i++ ) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

countSeconds(5);
```

그렇기 때문에 "var" 와는 다른 결과 값이 출력 됩니다.

[##_Image|kage@UHnix/btq9yNx9yqL/qzkcVmQ79A6TuO7rKo1QsK/img.jpg|alignCenter|data-origin-width="959" data-origin-height="1280" data-filename="KakaoTalk_Photo_2021-07-14-14-03-07.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

## **호이스팅 ( hoisting )**

let은 var키워드와 달리 호이스팅이 발생하지 않는 것처럼 동작합니다.

```
console.log(foo); // Reference Error : foo is not defined
let foo;
```

위의 코드처럼 차조 에러가 발생하는데요. 그 이유에 대해서 자세히 알아 보겠습니다.

2- 1. var

var는 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 "선언"과 "초기화"단계가 한번에 진행됩니다.

즉, 선언 단계에서 스코프에 식별자들 등록해 엔진이 변수의 존재를 알 수 있게합니다. 그리고 초기화 단계에서 이를 undefined로 초기화 합니다.

그리하여 아래와 같이 작동을 하게 됩니다.

```
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1
```

2-2 let

하지만 let은 var와 다르게 선언과 초기화단계가 분리되어 진행이 됩니다.

즉, var와 같이 선언은 이루어지지만 초기화는 변수 선언문에 도달 했을 때 실행이 됩니다.

```
console.log(foo); // Reference Error : foo is not defined

var foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1
```

이러한 선언-초기화 사이의 공백을 "일시적 사각지대(Temporal Dead Zone)" 이라고 부릅니다.

그렇다면 let 키워드는 호이스팅이 일어나지 않는다고 할 수 있을까요? 그렇지 않습니다.

```
let foo = 1;

{
    console.log(foo); // Referece Error : Cannot access 'foo' before initialization
    let foo = 2;

}
```

let 키워드로 선언ㄹ한 변수의 경우, 변수 호이스팅이 발생하지 않는다면 전역 변수 foo의 값을 출력 해야 합니다.

하지만, 호이스팅이 발생 하기에 다음과 같은 참조 에러가 발생합니다.

## **전역 객체와 let**

var 키워드로 선언한 전역변수/함수, 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 window 프로퍼티가 됩니다.

```
var x = 1;

y = 2;

function foo() {}

console.log(window.x); // 1
console.log(window.y); // 2
console.log(window.foo); // f foo();
```

하지만 let 키워드로 선언한 변수는 객체의 프로퍼티가 아니다. 고로, window로 접근 할 수 없습니다.
