## **MVC Pattern**

### MVC 패턴이란?

어플리케이션의 보수 & 유지를 더욱 손쉬운 방법으로 할 수 있도록 구상된 디자인 패턴의 유형 중 하나로써 하나의 앱을 Model, View, Controller로 나누어 관리하는 기법이다.

### MVC Pattern Detail

- 1 Model  
  프로그램에서 사용되는 데이터 및 그 데이터를 처리하는 역할을 수행합니다.
- 2 View  
  모델 또는 컨트롤러가 보여주고자 하는 것들을 유저에게 보여주는 역할을 수행합니다(=UI).  
  뷰는 데이터를 직접 보관하지 않고, 모델의 데이터를 출력 합니다.
- 3 Controller  
  Model과 View를 연결 시켜주고, 사용자의 입력을 처리하는 역할을 수행합니다.

### MVC Pattern Example

MVC 패턴을 보다 깊게 이해 하기 위해서, 우리가 일상에서 자주 접하는 POS기를 통해 예시를 들어 보겠습니다.

매장에 들어가서 주문을 하기 위해 POS기로 향하게 되면 다양한 메뉴와 결제 버튼등이 보입니다.

이는 Model 속에 있는 데이터들이 View를 통해 전달이 되어 우리의 눈에 보이게 됩니다.

우리가 결제를 위해 특정 상품을 선택하고 이를 결제 한다고 누르게 됬을 때, Controller는 이를 받아서 Model에 있는 데이터를 조작하고 View에 반환하는 역할을 수행합니다.

### MVC 패턴의 장/단점

### **장점**

비즈니스 로직 및 UI를 분리시켜 서로 영향을 주지 않는 개발이 가능해집니다.  
이에 따라, 유지보수 및 확장이 편리합니다.

### **단점**

Model과 View가 1:N의 의존관계를 가지게 됩니다.  
이에 따라, 양방향 데이터의 흐름이 발생하고 결과적으로는 복잡도 증가 및 예상치 못한 에러의 발생이 가능해집니다.  
설계 시간이 오래 걸리고, 숙련된 개발자가 필요합니다.

[##_Image|kage@Vovtm/btq0zc0g8QR/MpvkvzykmDUwJNounENO80/img.png|alignCenter|data-origin-width="1802" data-origin-height="948" data-filename="스크린샷 2021-03-19 오후 2.42.01.png" data-ke-mobilestyle="widthContent"|||_##]

## **Flux Pattern**

### Flux 패턴이란?

양방향 패턴으로 발생하는 문제를 해결 하기 위해 개발된 단방향 디자인 패턴입니다.

[##_Image|kage@bRD9HY/btq0u6NCTy2/bZQQEmC3aDcsn0fblfHZg0/img.png|alignCenter|data-filename="스크린샷 2021-03-19 오후 2.48.29.png" data-origin-width="1888" data-origin-height="320" data-ke-mobilestyle="widthContent"|||_##]

### Flux Pattern Detail

- 1 Action  
  액션은 데이터의 상태를 변경할 수 있는 명령어입니다. Action Constructor는 새로 발생한 액션의 타입과 데이터 페이로드를 액션 메시지로 묶어 디스패쳐에게 전달합니다.

- 2 Dispatcher  
  Flux의 모든 데이터 흐름을 관리하는 허브의 역할을 수행합니다.  
  Action이 발생하면 Dispatcher로 전달이 되는데 이 때 등록된 콜백함수를 이용하여 Store에 데이터를 전달합니다.

- 3 Store  
  스토어는 어플리케이션의 상태와, 상태를 변경할 수 있는 메서드를 가지고 있습니다.  
  Dispatcher로 부터 메시지를 수신 받기 위해서는 Dispatcher에 콜백 함수를 등록해야 합니다. Store가 변경되면 View에 변경되었다는 사실을 알려주게 됩니다

- 4 Store  
  스토어에 있는 데이터를 가져와, 특정한 자식 뷰에게 전달하고 새로운 값들을 화면에 렌더링합니다.

### Flux 패턴의 장/단점

- 1 장점  
  단방향 처리를 통해, 복잡성 및 예상치 못한 에러를 방지 할 수 있습니다.
- 2 단점  
  리액트 어플리케이션은 최상위 컴포넌트가 컨테이너로 작동하여, 속성을 통해 여러 번의 콜백을 만들어야합니다. 이에 따라, 새로운 에러가 발생 할 수 있습니다.
