### **머릿말**

이 글은 “How JavaScript works: an overview of the engine, the runtime, and the call stack” 를 번역한 글입니다.

### **자바스크립트 엔진(JavaScript Engine)**

[##_Image|kage@bocz04/btq0Nv6O9A8/ORH5nTAzitDYnkJDmmnp2K/img.png|alignCenter|data-filename="스크린샷 2021-03-23 오전 11.38.33.png" data-origin-width="984" data-origin-height="874" width="345" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

자바스크립트 엔진은 아래 2가지로 구성됩니다.

\- 메모리 힙 (Memory Heap) : 메모리가 할당되는 곳

\- 콜스택 ( Call Stack) : 코드가 실행됨에 따라 스택 프레임이 생기는 곳

하지만, 자바스크립트는 자신이 가진 엔진만으로는 실행이 될 수 없습니다.

이에 따라 자바스크립트는 엔진이 실행될 수 있게 하는 환경인 "런타임"을 가지고 있습니다.

### **자바스크립트 런타임(JavaScript Runtime)**

[##_Image|kage@rcnuc/btq0MVSiNxy/qr3kZ7XoAfW7OFdSE7hMu0/img.png|alignCenter|data-filename="스크린샷 2021-03-23 오전 11.41.16.png" data-origin-width="1456" data-origin-height="946" width="620" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

자바스크립트 런타임은 엔진을 비롯한 WebAPI, Event Loop, Callback Queue로 구성이 되어있습니다.

\- 콜스택

자바스크립트는 한 번에 하나만의 일을 처리할 수 있는 싱글 스레드 (Single Thread) 기반의 언어입니다.

콜 스택이라는 자료구조는 어떤 함수가 실행 될 때, 그 함수는 자바스크립트 엔진의 콜스택 가장 위에 쌓이고 Return이 발생하면 호출 스택에 사라집니다. 이를 통해, 싱글 스레드의 역할을 구현합니다.

예시를 통해 자세히 살펴보겠습니다 :)

```
function multiply(x,y) {
	return x*y;
 }

 function printNumber(x) {
 	let n = multiply(x,x);
    console.log(n);
 }

 printNumber(5);
```

[##_Image|kage@b0aqji/btq0DqTy6u7/nOSOouciXxphDmZGDTMRB1/img.png|alignLeft|data-filename="스크린샷 2021-03-23 오전 11.45.30.png" data-origin-width="1460" data-origin-height="688" width="703" data-ke-mobilestyle="widthContent"|||_##]

콜스택에 쌓이는 각각의 블록을 스택 프레임(Stack Frame)이라고 합니다.

오류를 발생시키는 블록의 경우, 스택에 가장 상단에 위치하게 됩니다.

[##_Image|kage@IoL1n/btq0OjE8whf/8SnTcbk325mWzhxmPXdKzK/img.png|alignLeft|data-filename="스크린샷 2021-03-23 오전 11.49.36.png" data-origin-width="1470" data-origin-height="736" width="700" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

또한, 콜 스택은 프레임이 일정 수준을 쌓이면 스택 날려 버리기 (Blowing the Stack)이라는 기능을 수행을 통해 에러를 출력합니다.

```
Uncaught RangeError: Maximum call stack size exceeded
```

그렇다면 이러한 문제를 방지하기 위해서 매 함수의 실행이 끝나기를 항상 기다려야 하는 걸까요?

만약, foo()라는 함수의 수가 무수히 증가하여 Stack Blowing이 일어나기를 기다려야 한다면, 효율적인 개발이 어려울 것입니다.

이러한 "싱글 스레드"가 가진 단점을 보완하기 위하여 자바스크립트는 **CallBack Function**을 이용합니다.

자바스크립트의 비동기 콜백은 브라우저의 Web API들이 있고, ES6부터는 Promise 객체와 같은 자바스크립트의 내장 기능으로도 지원됩니다

### ** Event Loop**

이벤트 루프는 자바스크립트 앱 안에서 동시에 여러가지 일이 실행되도록 핸들링 역할을 수행합니다.

지금 자바스크립트 앱 실행 중에 서버에서 필요한 데이터를 가지고 오는 비동기 요청이 있다고 가정해보겠습니다. 이 때 이벤트 루프는 브라우저에 이렇게 말할겁니다.

“브라우저야, 지금 이 콜백함수를 실행하면 데이터가 준비되는 시간만큼 너가 다른 일을 못하게 될테니, 네크워크 통신이 끝나고 데이터가 준비되면 그 때 내가 함수를 다시 호출(callback)할게.”

이 과정은 이벤트 루프가 콜스택(Call Stack)과 콜백 큐(Callback Queue)를 모니터링함으로써 이뤄집니다.

[##_Image|kage@CRmEx/btq0Ha3JYto/inJZlqmq87PENiFP3QEDsK/img.png|alignCenter|data-filename="스크린샷 2021-03-23 오전 11.55.16.png" data-origin-width="978" data-origin-height="350" width="480" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

자바스크립트 코드 실행 중 이벤트를 만나면 콜백 큐(Callback Queue)에 순서대로 쌓입니다. 그리고 콜스택(Call Stack)이 비면, 콜백 큐(Callback Queue)에서 첫 번째 이벤트를 가지고 와서 밀어넣습니다. 이벤트 루프는 이 작업을 반복(loop)합니다.
