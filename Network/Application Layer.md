## **Socket ( = The interface Betwwen the Application & Trans Port Layer )**

- 다른 컴퓨터 위에서 작동되는 두개의 프로세스가 소통을 하기 위해서는 "반드시" 네트워크를 거쳐서 가야합니다.
- 하지만, 프로세스가 보내는 메세지는 "Socket" 이라고 하는 API를 거쳐서 보내지고, 받을 수 있습니다.
- 개발자가 관여 할 수 있는 곳은 Application 계층에 국한이 되고, 네트워크 계층에서 선택 할 수 있는 것을 말해본다면 프로포콜의 종류 정도 고를 수 있습니다.

[##_Image|kage@b7VAjN/btq9NymWbHf/HjU8fYO3kzBxfgoJUekAeK/img.png|alignCenter|data-origin-width="2096" data-origin-height="938" data-filename="스크린샷 2021-07-16 오후 10.01.36.png" data-ke-mobilestyle="widthOrigin"|||_##]

제가 생각하는 그림은 다음과 같습니다 !

[##_Image|kage@IZID7/btq9NRGL8WC/oDwJ4g3LjBugYxwRDPOeWK/img.png|alignLeft|width="481" data-origin-width="481" data-origin-height="485" data-ke-mobilestyle="widthContent"|||_##]

## **Addressing Processes **

- 우편을 보내기 위해 주소지가 필요한 것 처럼, 하나의 프로세스가 다른 프로세스에게 메세지를 보내려면 주소가 필요합니다.
- 받는 프로세스를 확인 하기 위해서는 "IP" 주소와 "Port Number" 가 필요합니다.
- IP 주소는 보내려고 하는 호스트와 일치하는데 확인하는 용도로 사용이 됩니다.
- Port Number는 하나의 호스트가 다양한 프로그램을 운영 하고 있기 때문에 "특정 프로그램"임을 확인 하기 위해 사용됩니다.

## **TCP**

- 연결을 기반(= connection-oriendted service)하고 믿을 수 있는 데이터 전송을 지원하는 서비스 모델입니다.
  - Hand Shake
    - 어플리케이션에서 전송된 메시지가 보내지기 전에, TCP는 전송 계층에 대한 정보를 상호 교환합니다.
    - 핸드쉐이킹 작업이 완성되면 두 프로세스 간의 양방향(= 상호 데이터 전송이 가능한) 연결을 지원합니다.
  - 혼잡 제어 (= Congestion-Control Mechanism )
    - 네트워크가 막혀있는 상태면 TCP의 혼잡제어 서비스는 보내지는 프로세스를 조절(=throttles) 합니다.

## **UDP**

- 비연결을 기반으로 하기 때문에 핸드 쉐이킹 작업을 거치지 않습니다. 이를 통해, 안전성은 떨어지지만 빠른 속도의 전송을 보장합니다.

## **HTTP**

- 웹 서버와 클라이언트가 상호 간 "어떻게" 커뮤니케이션 할 지를 정의 해주는 역할을 수행합니다.
- TCP 프로토콜을 사용하고, 브라우저와 서버는 이를 소켓을 통해 접근합니다.
- HTTP는 기본적으로 Stateless 하여, 상태를 저장 하지 않습니다. 즉, 같은 요청이 와도 매 번 다르게 처리 한다는 것이죠.

[##_Image|kage@bkIp2T/btq9Ns8xUCD/ahiBITG9DkeY5fni58tyb0/img.png|alignCenter|data-origin-width="728" data-origin-height="470" data-filename="스크린샷 2021-07-17 오전 11.18.11.png" data-ke-mobilestyle="widthOrigin"|||_##]

## \*\*  

With Non-Persistent Connection\*\*

- 특징
  - "비 연결" 중심의 HTTP는 통신이 완료되면 TCP Connection이 끊어집니다. 즉, 통신이 될 때 마다 Connection이 새로 만들어 져야 한다는 것이죠.
  - TCP를 설립하는 과정 및 Request 요청을 보내고 응답 받는 과정을 통해 총 2번의 RTT가 발생합니다.
- 단점
  - 매 번 새로운 연결이 만들어지며, 이에 맞는 TCP 버퍼와 변수가 할당 됨으로 서버에 무리를 준다.
  - 2번의 RTT를 무조건 반복 해야 함으로써 딜레이를 발생 시킬 수 있다.

이러한 단점을 극복 하기 위해서 연결 중심의 HTTP가 기본으로 사용 되고 있씁니다 :D
