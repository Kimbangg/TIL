## DOM ( DocumentObject Model )

### **DOM이란?**

" HTML, XML 문서의 Programming Interface이다. "

DOM에 대해 검색을 하면 가장 우선적으로 나오는 정의인데, 보통 저런 해석을 보면 즉각적인 "이해"가 어려워 정의에 대해 차근차근 풀어 나가보겠습니다.

Document Object Model 인 DOM은 말 그대로 Document(=html) 를 JavaScript가 이해 할 수 있는 Object 구조로 변경 시켜주는 역할을 수행 하여 웹 브라우저에 렌더링을 가능하게 해주는 역할이라고 생각을 하시면 좋을 것 같습니다.

예시에서 보여주는 element는 Dom Node들을 뜻합니다. DOM이 없으면 JavaScript는 DOM에 대한 조작이 불가합니다.

\- 예시

1\. document.getElementByid(id);

2\. document.createElement();

### **DOM 역할**

DOM은 Document 파일을 아래의 그림처럼 Tree 형태로 나누어 렌더링을 합니다 :)

[##_Image|kage@Bsnzb/btq0Jyjb3N9/Eaef0nVgWtWtNNKkyhtU6K/img.png|alignCenter|data-origin-width="1372" data-origin-height="748" data-filename="스크린샷 2021-03-23 오후 1.45.54.png" data-ke-mobilestyle="widthContent"|||_##]

### **DOM 렌더링 과정**

[##_Image|kage@cZFQ6B/btq0Smamb3T/PaVT5A3gNiaf51vOlhVN1K/img.png|alignCenter|data-filename="스크린샷 2021-03-23 오후 2.06.45.png" data-origin-width="1498" data-origin-height="654" data-ke-mobilestyle="widthContent"|||_##]

1\. DOM 트리를 구성

브라우저가 .html 파일을 전달 받으면, 이를 이용하여 DOM 노드들로 이루어진 트리를 생성합니다.

각 노드는 HTML의 엘리먼트들과 연관이 있습니다.

2.  Render Tree를 구성

외부 CSS 파일과 각 엘리먼트들의 inline 스타일을 파싱합니다.

Webkit에서는 이 과정을 Attachment라고 부르는데, 이 과정에서 Attach 라는 메소드를 사용하여 스타일 정보를 반영한 객체를 반환합니다.

3\. Layout과 Paint

렌더트리가 만들어지면 스크린의 좌표를 얻어내는 layout과정과 렌더링 된 요소에 색을 입히는 Painting 작업을 마친 후 화면에 출력합니다.

### **DOM의 장점**

크로스 플랫폼에 용이하다.

### **DOM의 문제점**

브라우저에서 DOM 변화가 일어나면, 위의 렌더링 과정을 다시 수행 해야한다.

호환성의 유지가 어렵다.

## Virtual DOM ( VirtualDocumentObject Model )

### **Virtual DOM이란?**

Virtual DOM은 변화가 일어나면 가상 DOM에 먼저 적용시키고 최종 결과물만 실제 DOM에 반영 함으로써, 이전 DOM이 겪는 문제를 효과적으로 해결 할 수 있습니다.

### **Virtual DOM의 중요성**

실제 DOM에서 일어나는 일을 더 구체화 하여서 이야기 해보자면, 30개의 노드 중 1개의 노드에 변화만 주더라도 30개 모두 렌더링 ㄹ해야하는 "비효율"이 발생 할 수 있다는 점입니다.

그리하여 더블 버퍼링과 같은 Virtual DOM 을 통해 변화가 일어나면 오프라인 DOM에 적용시키고 최종적인 변화만을 실제 DOM에 전달함으로써 "연산의 횟수"를 줄이는 효율적인 개발이 가능해집니다.

궁극적으로 Virtual DOM 은 엄청나게 특별한 개념은 아니지만, 우리가 이를 활용하는 이유는 수동적으로 DOM fragment를 관리해주지 않아도 된다는 점과 다른 DOM과 상호작용을 하지 않아도 된다는 점이 가장 강력한 이유 입니다!
