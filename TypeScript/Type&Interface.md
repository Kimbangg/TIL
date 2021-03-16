# 타입(type)과 인터페이스(interface)의 차이점

## 1. 타입이란?
 변수를 선언 할 때, 이를 저장하는 데이터의 종류를 의미합니다.


 ## 2. 인터페이스란?
 인터페이스는 동일한 기능을 수행하게끔 하는 "룰"과 같은 역할을 한다.


 ## 3. 비교 분석

 아래의 코드를 보면 타입과 인터페이스의 역할을 "명확히" 구분 하기 어려울정도로 비슷한 역할 및 형태를 취하고 있다.  
 
 그러한 점을 고려하여, 각각 가지는 목적을 명확히 아는 것이 중요한데,

 위에서 언급했던 내용처럼 타입이라고 하는건 "변수"가 가지는 데이터의 종류를 의미합니다. 즉, 어떤 "형태"와 "구조"를 강조화 하는 것이 아니라 "종류"를 정하는데 포커스가 맞춰져 있습니다.

 그와는 반대로 인터페이스는 하나의 "룰" 로써 단순한 타입만이 아닌 클래스 또는 함수가 가져야 하는 구조 등을 "강제화"하는데 목적을 맞춰 사용이 됩니다.


 ``` typescript
 // 타입
type PositionType = {
    x: number;
    y: number;
};      

// 인터페이스
interface PositionInterface {
    x: number;
    y: number;
}

// object

const obj1: PositionType = {
    x: 1,
    y: 1,
};

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
};

// class
class Pos1 implements PositionType {
    x: number;
    y: number;
}

class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}
 ```

  ## 4. 타입 및 인터페이스의 활용

  ### 4-1 타입  
  타입은 Properties Computing 기능이 있어서 다음과 같이 Person 타입에 있는 Person[name] (string) 만을 별도의 타입으로 선언하여 사용이 가능합니다.  

 ```typescript
  type Person = {
    name:string;
    age: number;
  };

type Name = Person["name"]; // string

type NumberType = number;
type Direction = "left" | " right";
```
  
  ### 4-2 인터페이스
인터페이스는 아래와 같이 동일한 이름을 가진 interface를 별도로 선언하여도 자동으로 합쳐져 PositionInterface를 implement하는 모든 값들은 x,y,z를 선언 해야합니다.
 ```typescript
 // only interfaces can be merged;
    interface PositionInterface {}
        x: number;
        y: number;
    }

    interface PositionInterface {
        z: number;
    }
  ```