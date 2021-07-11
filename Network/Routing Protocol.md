## **머릿말**

이전 게시물을 통해, 거리벡터 & 링크상태 알고리즘에 대해서 다루었습니다.

이번에는

1. IGP 에서 사용되는 라우팅 프로토콜인 RIP & OSPF

2. EGP 에서 사용되는 BGP 프로토콜까지 알아 보겠습니다.

\* 라우팅 알고리즘과 프로토콜은 모두 "동적 라우팅" 에 해당됩니다.  "수동 라우팅"의 경우 목적지를 관리자가 모두 설정 하기 때문에 별도의 라우팅이 요구 되지 않습니다.

[##_Image|kage@bbLODe/btq80ze8KrS/Jqrc1jIe5znr7UgmlPMkkK/img.png|alignCenter|data-origin-width="1280" data-origin-height="804" data-ke-mobilestyle="widthOrigin"|||_##]

## **들어가기 전에**

인터넷은 각 기관이나 단체가 독립적으로 운영하는 네트워크들이 라우터에 의해 연결된 복잡한 네트워크 입니다.

이 때, 독립적인 네트워크를 AS(Autonomous System) 라고 부릅니다.

AS의 범위를 기준으로 프로토콜이 나뉘는데, 오늘 살펴 볼 2가지 알고리즘은 AS 범위 내에 있는 IGP에 해당된다.

IGP(Internal Gateway Protocol) 는 같은 라우팅 프로토콜을 사용합니다.

반대로, AS외부의 프로토콜은 AS와 AS를 연결해주는 역할을 수행한다. 이를 EGP ( External Gateway Protocol)라고 부릅니다.

[##_Image|kage@bGcyU1/btq8YXut8Ti/js8V8YCEk2ReJIFfj7dWk0/img.png|alignCenter|data-origin-width="1122" data-origin-height="594" data-filename="스크린샷 2021-07-06 오후 5.16.18.png" data-ke-mobilestyle="widthOrigin"|||_##]

## **RIP ( Routing Information Protocol )**

\- RIP는 거리벡터 알고리즘을 사용하는 대표적인 라우팅 프로토콜입니다.

\- 벨만포드 알고리즘 + hop 수를 기반으로 작동합니다. ( 최대 15홉 )

\- 최단거리를 홉으로 판단합니다.

\- 30초마다 라우팅 테이블을 이웃 라우터와 공유합니다.

\- RIP는 AS 내부를 구성하는 프로토콜(=IGP)에 해당됩니다.

## **OSPF ( Open Shortest Path First )**

\- OSPF는 다익스트라(=링크상태) 알고리즘을 사용하는 대표적인 라우팅 프로토콜입니다.

\- 최단 거리를 비용으로 판단합니다.

## **BGP ( Border Gateway Protocol )**

BGP는 규모가 큰 망을 지원하는 Path Vector (=거리벡터 발전)기반 알고리즘입니다.

링크 상태 변화가 발생하면 라우팅의 정보를 교환합니다.

## **라우팅 프로토콜 비교**

<table style="border-collapse: collapse; width: 100%; height: 100px;" border="1" data-ke-align="alignLeft" data-ke-style="style13"><tbody><tr style="height: 10px;"><td style="width: 25%; height: 10px; text-align: center;">구분</td><td style="width: 25%; height: 10px; text-align: center;">RIP&nbsp;</td><td style="width: 25%; height: 10px; text-align: center;">OSPF</td><td style="width: 25%; height: 10px; text-align: center;">BGP</td></tr><tr style="height: 18px;"><td style="width: 25%; height: 18px; text-align: center;">표준화</td><td style="width: 25%; height: 18px; text-align: center;">IETF</td><td style="width: 25%; height: 18px; text-align: center;">IETF</td><td style="width: 25%; height: 18px; text-align: center;">IETF</td></tr><tr style="height: 18px;"><td style="width: 25%; height: 18px; text-align: center;">알고리즘</td><td style="width: 25%; height: 18px; text-align: center;">거리벡터</td><td style="width: 25%; height: 18px; text-align: center;">링크상태</td><td style="width: 25%; height: 18px; text-align: center;">링크상태</td></tr><tr style="height: 18px;"><td style="width: 25%; height: 18px; text-align: center;">최대 홉수</td><td style="width: 25%; height: 18px; text-align: center;">16</td><td style="width: 25%; height: 18px; text-align: center;">없음</td><td style="width: 25%; height: 18px; text-align: center;">없음</td></tr><tr style="height: 18px;"><td style="width: 25%; height: 18px; text-align: center;">계층형구조</td><td style="width: 25%; height: 18px; text-align: center;">미지원</td><td style="width: 25%; height: 18px; text-align: center;">지원</td><td style="width: 25%; height: 18px; text-align: center;">지원</td></tr><tr style="height: 18px;"><td style="width: 25%; height: 18px; text-align: center;">망규모</td><td style="width: 25%; height: 18px; text-align: center;">소규모</td><td style="width: 25%; height: 18px; text-align: center;">대규모</td><td style="width: 25%; height: 18px; text-align: center;">대규모</td></tr></tbody></table>
