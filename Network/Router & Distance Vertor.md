## **1\. 라우터(Router) 란?**

Router는 **1) 최적의 길을 찾아주는 Path Determine** 과  **2) 패킷을 전송하는 Switching** 이렇게 2가지의 기능을 수행합니다.

우리가 여기서 다룰 내용은 최적의 길을 찾는 방법인 라우팅 프로토콜들에 대해 알아보겠습니다.

## **2\. 라우팅의 종류**

-   정적 라우팅
    -   라우팅 경로를 관리자(사람)가 직접 설정 해주는 방법을 의미한다.
    -   보통 망의 크기가 작고, 내부 변화가 이루어지지 않을 때 사용한다.
    -   네트워크 테이블을 교환 하지 않고, 라우팅만 해서 네트워크 대역폭을 절약 할 수 있다.

-   동적 라우팅
    -   라우팅 프로토콜을 호라성화 해주면 라워끼리 알고 있는 정보를 공유한다.
    -   이를 통해 상황에 맞춰 경로를 결정한다.
    -   구축 하는 비용과 난이도가 높고, 리소스를 많이 잡아 먹는다.

## **3\. 거리벡터 ( Distance Vector Algorithm )**

-   각 라우터가 인접해 있는 라우터와 거리(Distance)와 방향(Vector)에 대한 정보를 공유합니다.
-   이웃하는 노드의 거리 테이블만 아는 상태에서 최소의 거리를 구합니다.
-   프로토콜의 종류로는 RIP, BGP, EIGRP 등이 있습니다.

## **4\. 거리벡터 작동방식**

-   거리벡터는 ( x -> v (x에서 이웃한 ) + v -> y 값 ) 과 ( x -> y) 로 바로 이동하는 값 중 최소 값을 구하며 이동합니다.  
       

[##_Image|kage@djBYDV/btq8UPjeSVV/VkomRS8OQdI1BB8VC9TKaK/img.png|alignCenter|data-origin-width="560" data-origin-height="63" data-filename="img.png" data-ke-mobilestyle="widthOrigin"|||_##]

아래의 예시를 보면, 자세히 설명 해보겠습니다.

[##_Image|kage@80mJ9/btq8TRoiszx/2HVRJICKNMzUuARIecKleK/img.png|alignCenter|data-origin-width="345" data-origin-height="268" data-ke-mobilestyle="widthOrigin"|||_##]

다음과 같은 네트워크는 최초 아래와 같은 "Distance Table" 을 가지고 있을 것 입니다.

[##_Image|kage@1xov6/btq8ZuSBjB3/lHdQjC4cHtMnf5H3q9kq3K/img.png|alignCenter|data-origin-width="1024" data-origin-height="640" data-ke-mobilestyle="widthOrigin"|||_##]

이후에, 이웃한 노드에게 Vector Table을 공유합니다.

[##_Image|kage@ps7IK/btq8ZZrsxZU/sMZCaEqRgECw4qeBFS3PgK/img.png|alignCenter|data-origin-width="1023" data-origin-height="641" data-ke-mobilestyle="widthOrigin"|||_##]

서로의 거리벡터를 교환한 이후에 X->Z로 가는 비용을 계산해보면 아래의 식과 같은 계산을 따를 것이고, 테이블은 다음과 같이 업데이트 될 것 입니다.

[##_Image|kage@SMDuB/btq8Tvy13K5/XoyxmDgtjDmWTIwuXuUHO0/img.png|alignCenter|data-origin-width="1044" data-origin-height="231" data-ke-mobilestyle="widthOrigin"|||_##][##_Image|kage@Il1L0/btq8ZJvk5L2/JyGYDv6KpCenFAhxCQmDT1/img.png|alignCenter|data-origin-width="1024" data-origin-height="641" data-ke-mobilestyle="widthOrigin"|||_##]

이후 업데이트 된 벡터 정보를 이웃 노드들에게 공유합니다.

[##_Image|kage@bNmzT8/btq8ZruVLUp/Wc0HZ20xorB2o1Y298ac5K/img.png|alignCenter|data-origin-width="1024" data-origin-height="641" data-ke-mobilestyle="widthOrigin"|||_##]

## **5\. 거리벡터 테이블**

위에서 작동 방식을 설명 하기 위해서 테이블을 보여 드렸습니다. 하지만, 거리벡터 테이블은 실제로 2가지의 테이블을 가지고 있는데요.

첫 번째는 위에서 보여 드린 벡터 테이블, 그리고 두 번째는 Hop을 계산하는 링크 테이블이 별도로 존재합니다.

[##_Image|kage@FLbIU/btq8U2P8Kxa/d6tHIbpoo1kHrmV1E6Bwrk/img.png|alignCenter|data-origin-width="702" data-origin-height="204" data-ke-mobilestyle="widthOrigin"|||_##]

## **6\. Count-to-Infinity Problem **

거리벡터에서는 라우팅 루프를 돌 수 있는 큰 문제가 있습니다. 이 문제는 보통 네트워크가 죽을 때에 발생하게 됩니다. 예를 들어서, A-B-C가 서로 연결 되어있고 각 간선이 1인 상황을 예시로 들어 보겠습니다.

1\. A-B가 끊어집니다.

**2\. 동시에 B가 테이블에서 갈 수 없는 A를 무한대로 설정합니다.**

3\. 그리고 시간이 지나 C가 라우팅 테이블을 B에게 줍니다.

4\. 여기서 C는 A,B 사이에 무슨 일이 일어났는지 알 수 없습니다. 그렇기 때문에 C는 자신의 거리 정보를 그대로 줍니다.

5\. 그러면 B는 C가 A를 2번만에 갈 수 있다는 테이블을 받고, B는 C를 통한다면 A로 갈 수 있다고 생각하고 A -> C를 3번이면 갈 수 있다고 수정합니다.

6\. B는 C에게 5의 정보를 담아서 보내주면 C는 다시 테이블을 업데이트하여 B로 보내고 이 작업은 무한히 발생합니다.