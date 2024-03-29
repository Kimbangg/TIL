## **머릿말**

사용에 목적을 두어 JWT를 사용해서, 기술면접에서 이에 대해 올바르게 대답 하지 못했다. 이를 계기로 사용하는 기술에 대해서는 "이유와 목적"을 명확히 해야겠다는 생각이 들었다.

그리하여, 서버 - 토큰 기반 인증과 JWT에 대해서 자세히 알아 보고자 합니다.

## **시작 하기 전에**

HTTP는 다음 특징을 가지고 있습니다.

- Connenctionless: 클라이언트가 요청을 서버에게 보내면 서버는 이에 대한 적절한 응답을 한 후에 연결을 종료합니다.
- Stateless: 서버와 클라이언트와의 연결이 종료된다면 상태 정보는 저장하지 않고 사라집니다.

따라서 위의 특징으로 인해 이벤트를 발생 시킨 유저를 확인 할 수 있는 수단이 필요합니다. 이에따라, 하단의 서버 및 토큰을 기반으로 한 인증 방식이 등장합니다.

## **1\. 서버 기반 인증 시스템**

- 서버 기반의 인증 방식은 서버 측에서 사용자들의 정보를 기억하고 있어야 했다.
- 대표적으로 세션을 사용하는 방법이 이에 해당합니다. 유저가 로그인을 하면 서버는 해당 유저의 세션을 만들고 서버의 메모리와 데이터 베이스에 저장합니다.
- 클라이언트로부터 요청을 받으면, 상태를 계속해서 유지하고 이용하는데, 이를 stateful server라고 한다.

[##_Image|kage@zeZxq/btq8Nv5GN3Q/XWzKU8lOcEfQK24Ueh3BaK/img.png|alignCenter|data-origin-width="473" data-origin-height="433" data-ke-mobilestyle="widthOrigin"|||_##]

## **서비 기반 인증 방식의 문제점**

- 사용자 수가 늘어날수록 세션으로 저장하는 정보가 증가하기에 메모리를 많이 차지하여 과부하가 발생합니다.
- 쿠키는 단일 도메인 및 서브 도메인에서만 작동하기 때문에 여러 도메인에서 관리하는 것은 번거롭습니다 ( = CORS )
- 사용자가 늘어나면, 이를 처리 하기 위해 컴퓨터를 확장 시켜야 한다. 이 때 세션을 분리하는 작업이 필요하지만, 이는 매우 복잡하다.

## **2\. 토큰 기반 인증 방식**

- 인증받은 사용자들에게 토큰을 발급하고, 서버에 요청을 할 때 헤더에 토큰을 함께 보내도록 하여 클라이언트 측에서 유효성을 검사를 한다.
- 즉, 서버에서 고객의 정보를 유지 하지 않기 때문에 이를 Stateless Server라고 부른다.

## **토큰 기반 인증 방식 작동 방식**

1.  사용자가 아이디와 비밀번호로 로그인을 한다.
2.  서버 측에서 해당 정보를 검증한다.
3.  정보가 정확하다면 서버 측에서 사용자에게 Signed 토큰을 발급한다
4.  클라이언트 측에서 전달받은 토큰을 저장해두고, 서버에 요청을 할때마다 해당 토큰을 서버에 함께 전달한다. 이때 HTTP 요청 헤더에 토큰을 포함시킨다.
5.  서버는 토큰을 검증하고, 요청에 응답한다.

[##_Image|kage@bgxkVR/btq8ICSHA99/FsTEhtdn2yQkBpuJh1sTd1/img.png|alignCenter|data-origin-width="1006" data-origin-height="888" width="719" height="634" data-ke-mobilestyle="widthOrigin"|||_##]

### **토큰 기반 인증 방식의 장점**

- Stateless 하기 때문에, 어떤 서버에 요청해도 상관없다. 즉, 확장**(Scalability)**에 용이하다.
- (여기서 확장이란, 서버의 처리능력 이라고 생각 하시면 좋습니다. )
- 사용자에게 필요한 권한을 부여함으로써, 사용범위의 확장성(Extensibility)을 증가 시킬 수 있다 (= 소셜 로그인 )
- 여러 도메인에서 공통적으로 사용 될 수 있다.

여태까지 서버와 토큰 기반의 차이를 살펴봄으로써, 왜 "토큰" 방식을 채택하는 것이 좋은지 알게 되었는데요. 다음 게시물에서 JWT 에 대해서 자세히 다루어보겠습니다.
