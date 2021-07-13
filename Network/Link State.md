## **머릿말**

지난 게시물에서 라우터에 대한 설명과 라우팅 알고리즘 중 거리벡터 알고리즘을 다루었습니다.

[https://kimbangg.tistory.com/261](https://kimbangg.tistory.com/261)


## **링크상태 알고리즘 ( Link-State-Algorithm )**

\- 테이블 정보를 broadcast 함으로써, 각 라우터가 전체 네트워크의 구성과 링크 상황을 다 알고 있다.

\- 이를 통해 최적의 거리를 구하는데, 대표적인 알고리즘으로는 다익스트라(Dijkstra) 가 있습니다.

```
// 다익스트라 수도코드 (Dijikstra Pesudo Code )
DIJKSTRA(G,w,s) <- w는 비용, s는 시작점을 의미합니다.
    INITIALIZE-SINGLE-SOURCE(G, s)
    S = φ  <- 들른 곳을 의미합니다.
    Q = G.V
    while Q ≠ φ
        u = EXTRACT_MIN(Q)
        S = S ∪ {u}
        for 각 정점 v ∈ G.Adj[u]
            RELAX(u, v, w) <- v의 비용을 작게 만들면 갱신됩니다.
```

## **링크상태 작동방식**

1.  출발 노드를 선정한다.
2.  출발 노드를 기준으로 각 노드의 최소 비용을 저장한다.
3.  방문하지 않은 노드 중에서 가장 비용이 적은 노드를 선택한다.
4.  해당 노드를 거쳐서 특정한 노드로 가는 경우를 고려하여, 최소 비용을 갱신한다.
5.  3~4번을 반복한다.

## **예시**

1번을 출발 노드로 선정합니다.

[##_Image|kage@NAAX5/btq8ZZLNf83/r43vVzoKueKhFuZQNEnDnK/img.png|alignCenter|data-origin-width="1182" data-origin-height="1262" data-filename="스크린샷 2021-07-06 오후 4.49.04.png" data-ke-mobilestyle="widthOrigin"|||_##]

위의 그래프를 행렬로 나타내면 다음과 같습니다.

이제 여기서 방문 하지 않은, 가장 적은 비용이 드는 노드로 이동합니다.

[##_Image|kage@cNyNjP/btq8W7xhy5d/eNB8pdKIXOZUTxapvwr251/img.png|alignCenter|data-origin-width="1386" data-origin-height="80" data-filename="스크린샷 2021-07-06 오후 4.49.32.png" data-ke-mobilestyle="widthOrigin"|||_##]

기존에 1은 5로 가는 길이 없었지만, 4를 통하면 2의 비용을 지불하여 이동 할 수 있습니다. 그리하여, 행렬을 이에 맞춰 수정해줍니다.

[##_Image|kage@RfgBC/btq8UOLMXmy/mRKLx3ltwgPzkmkAdQpzGk/img.png|alignCenter|data-origin-width="1210" data-origin-height="1286" data-filename="스크린샷 2021-07-06 오후 4.50.22.png" data-ke-mobilestyle="widthOrigin"|||_##][##_image|kage@cyhfw8/btq80ymtw4r/lcfnxblugtihgehab8kfqk/img.png|aligncenter|data-origin-width="1388" data-origin-height="90" data-filename="스크린샷 2021-07-06 오후 4.51.10.png" data-ke-mobilestyle="widthorigin"|||_##]

다음 방문 하지 않은 가장 적은 노드는 "2번" 입니다.

2번 노드는 방문 하였지만, 갱신 할 값이 없기에 지나갑니다.

[##_Image|kage@wCmHL/btq8YWCiMRN/f7xHA3VIYq8RQ84AFqVrg0/img.png|alignCenter|data-origin-width="1240" data-origin-height="1296" data-filename="스크린샷 2021-07-06 오후 4.51.52.png" data-ke-mobilestyle="widthOrigin"|||_##][##_image|kage@cia7o2/btq8zzsakre/thvrxmdlc36oimo2gttlxk/img.png|aligncenter|data-origin-width="1388" data-origin-height="86" data-filename="스크린샷 2021-07-06 오후 4.52.36.png" data-ke-mobilestyle="widthorigin"|||_##]

다음으로 방문 하지 않은 노드는 5번째 노드입니다.

5번째 노드를 거치면  3번째 노드로 가는 비용이 3으로 줄어들고, 6으로 가는 방법이 생깁니다.

[##_Image|kage@ek1BzJ/btq8T84Le8v/UqOaCjHiXPZJVA2eSZkdv0/img.png|alignCenter|data-origin-width="1234" data-origin-height="1278" data-filename="스크린샷 2021-07-06 오후 4.53.39.png" data-ke-mobilestyle="widthOrigin"|||_##][##_image|kage@bxmzuc/btq8zjjmmaj/wnbkn9xypilugvzpjjked0/img.png|aligncenter|data-origin-width="1384" data-origin-height="90" data-filename="스크린샷 2021-07-06 오후 4.53.45.png" data-ke-mobilestyle="widthorigin"|||_##]

다음으로 3을 방문하면, 갱신이 없어서 패스를 합니다.

[##_Image|kage@bazoxu/btq8R0lIIIg/lFgkJ2Jxw7wIao4RIboUo1/img.png|alignCenter|data-origin-width="1268" data-origin-height="1308" data-filename="스크린샷 2021-07-06 오후 4.54.58.png" data-ke-mobilestyle="widthOrigin"|||_##][##_image|kage@vmtmh/btq8zodatzy/npmkhbcxiblffx4rav4cek/img.png|aligncenter|data-origin-width="1386" data-origin-height="90" data-filename="스크린샷 2021-07-06 오후 4.55.04.png" data-ke-mobilestyle="widthorigin"|||_##]

마지막으로 6을 살펴봐도, 별다른 갱신이 일어나지 않습니다.

[##_Image|kage@bYdIJe/btq8ZiSIgpb/9N4W0HGcr6P8QJXkFY3KJ0/img.png|alignCenter|data-origin-width="1184" data-origin-height="1280" data-filename="스크린샷 2021-07-06 오후 4.55.27.png" data-ke-mobilestyle="widthOrigin"|||_##][##_image|kage@bpibcq/btq80nyyv7s/fomn93veqgzqpkqr9ukkn0/img.png|aligncenter|data-origin-width="1382" data-origin-height="82" data-filename="스크린샷 2021-07-06 오후 4.55.33.png" data-ke-mobilestyle="widthorigin"|||_##]

이렇게 다익스트라 알고리즘이 끝이 납니다.

## **출처 **

[https://blog.naver.com/ndb796/221234424646](https://blog.naver.com/ndb796/221234424646)



23\. 다익스트라(Dijkstra) 알고리즘

다익스트라(Dijkstra) 알고리즘은 다이나믹 프로그래밍을 활용한 대표적인 최단 경로(Shortest Path) 탐...

https://blog.naver.com/ndb796/221234424646
