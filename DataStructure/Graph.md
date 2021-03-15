**1\. Graph란?**

그래프란 노드와 그 노드를 연결하는 간선으로 이루어진 자료구조를 의마한다

\* 그래프에서 사용되는 용어들  
1\. 정점(=vertex) : 노드와 같은 뜻을 가지고 있다.  
2\. 간선(=edge) : 정점 또는 노드를 이어주는 선을 의미한다.  
3\. 정점의 차수(degree) : 하나의 정점에 인접한 정점의 수

**2\. Grpah의 종류**

1\. 무방향 그래프  
정점을 이어주는 간선을 통해 "양방향"으로 이동이 가능하다.

[##_Image|kage@9dlWR/btqZ6imwvMg/WNl3DWBgxapsRKnggxXuW1/img.png|alignLeft|data-filename="스크린샷 2021-03-14 오후 7.13.24.png" data-origin-width="680" data-origin-height="598" width="371" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

2\. 방향 그래프  
정점을 이어주는 간선을 통해 "단방향"으로 이동이 가능하다.

[##_Image|kage@c3JnlW/btqZ0sc7d3a/uqvF6oAbfebuOpmiDhGv0K/img.png|alignLeft|data-filename="스크린샷 2021-03-14 오후 7.13.49.png" data-origin-width="692" data-origin-height="612" width="360" height="NaN" data-ke-mobilestyle="widthContent"|||_##]

**3****.Grpah의 표현방식**

**1 인접 행렬**

인접 행렬은 그래프의 연결 관계를 이차원 배열로 나타내는 방식이다.

\- 장점

1\. 구현이 쉽다

2\. 연결 여부를 쉽게 파악 할 수 있다.

( 행렬 내부에서 0 | 1 인지만 파악하면 되기 때문에, O(1)의 속도로 빠르게 찾을 수 있다 )

\- 단점

1\. 정점과 연결된 부분을 찾는 시간이 많이 소요된다.

( I라는 정점에 연결된 요소를 찾기 위해서는 adj\[i\]\[1\] ~ adj\[i\]\[N\] 를 모두 확인 해야 한다 )

**2\. 인접 리스트**

각각의 노드에 연결된 노드들을 원소로 갖는 리스트들의 배열을 의미.

\-장점

\- 연결된 간선만을 저장하기에, 적은 메모리를 차지한다.\- 연결된 모든 정점을 찾기에 용이하다.

\-단점

\- I-J 간 연결 여부를 확인 하기 위해서는 adj\[i\]를 모두 확인 해야함으로, O(V) 만큼의 시간이 소요된다.