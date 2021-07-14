## **스코프란? **

스코프는 코드가 유효한 범위를 의미한다. 크게는 지역(local) 과 전역 (global) 로 나누어 정의 할 수 있습니다.

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

## **클로저란?**

이제 스코프라는 개념을 바탕으로 클로저에 접근 하기 전에, 잠시 클로저가 뭔지 이야기 해보겠습니다.

클로저는  쉽게 말해보자면 "호출 하려는 함수에 출력 하고자 하는 값이 없으면 가까운 함수부터 -> 전역 변수까지 탐색하면서 원하는 값을 찾는 것" 정도로 생각 하시면 좋을 것 같습니다. 그나마 쉽게 이야기는 했지만 저 역시도 이해가 어려웠기에 예시를 통해 설명 드릴게요 :D

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

하지만, 클로저는 스코프 체인을 올라가는 것 외에도 다른 기능을 수행하는데요. 그것은 바로 " 함수가 종료되어도, 그와 관련된 스코프 체인"을 모두 기억 한다는 것입니다.

그리하여, 아래의 코드를 실행해도 위에서 얻었던 결과 값과 같게 출력 됩니다 :D

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

var outer_func = outer();
outer_func();
```
