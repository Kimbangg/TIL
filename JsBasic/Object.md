## 객체란 무엇인가?
원시형(primitive) 자료와는 다르게 객체형은 다양한 데이터를 담을 수 있다.  
객체는 중괄호 {..} 를 이용하여 만들 수 있고 키(key)와 값(value) 쌍으로 구성된 프로퍼티(property)를 여러 개 넣을 수 있다.  
서랍장으로 많이 비유되는데, 하단의 코드를 통해 조금 더 자세히 설명 해보겠다.

### 객체 선언 방법

```
    let user = new Object(); // '객체 생성자' 문법
    let user = {}; // 객체 '리터럴' 문법
    // 주로 리터럴 방법을 자주 사용한다.
```

### 리터럴과 프로퍼티

```
    let user = {
        name: "john",
        age: 30,
        "likers birds" : true // 복수의 단어에는 따옴표
    };

    // 출력
    console.log(user.name);
    console.log(user.age);
    console.log(user["likes birds"]);
    // 복수 단어는 .~~ 를 통해 얻을 수 없다.
    
    // 삭제
    delete user.age;
```