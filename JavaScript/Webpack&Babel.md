### **웹팩이란?**

웹팩은 자바스크립트 애플리케이션을 위한 정적 모듈 번들러이다.

[##_Image|kage@uZPZt/btq0OkkraK1/sy0Hyx7wTS1HMHwO6l2c7k/img.png|alignCenter|data-filename="스크린샷 2021-03-23 오후 5.33.00.png" data-origin-width="1866" data-origin-height="780" data-ke-mobilestyle="widthContent"|||_##]

### **웹팩은 무슨 역할을 하는거야?**

리액트 같은 경우에는 한 개의 html 파일 내부에 여러 가지의 JavaScript 파일들이 존재하는데 이를 하나의 파일로 묶어준다.

이러한 번들링 과정을 통해 관리의 편리성 증대 & 컴파일 시간 단축 결과적으로는 웹 페이지의 성능을 최적화 시킬 수 있다.

### **웹팩의 주요 속성**

**Entry:**  
웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점 이자 자바스크립트 파일 경로 입니다.

웹팩은entry를 통해서 모듈을 로딩하고 하나의 파일로 묶습니다.

**Output:**  
웹팩에서entry로 찾은 모듈을 하나로 묶은 결과물을 반환할 위치입니다.

**Loader:**  
웹팩은 기본적으로 자바스크립트와 JSON 만 빌드할 수 있습니다.

자바스크립트가 아닌 다른 자원 (HTML, CSS, Image)를 빌드할 수 있도록 도와주는 속성입니다

**Plugin:**  
plugin은 웹팩의 기본적인 동작 외 추가적인 기능을 제공하는 속성입니다.

loader는 파일을 해석하고 변환하는 과정에 관여하고,plugin은 결과물의 형태를 바꾸는 역할을 합니다.

### **바벨이란?**

바벨은 모던 자바스크립트인 ES6를 구 버전인 ES5로 전환 해주는 역할을 수행한다.

[##_Image|kage@FY1s8/btq0PdyEDhg/F9PLZ9mkjlDZoP1KYNsLYK/img.png|alignLeft|data-filename="스크린샷 2021-03-23 오후 5.46.49.png" data-origin-width="828" data-origin-height="522" width="704" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

### **바벨은 왜 필요한건가?**

대부분의 브라우저는 ES6를 지원하지만, 그렇지 않은 경우도 있어서 바벨을 사용함으로써 발생할 수 있는 문제를 방지할 수 있다 :)
