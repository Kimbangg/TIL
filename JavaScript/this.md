## **This 란?**

This의 값은 함수를 **"호출하는 방법"**에 의해 결정된다.

호출 방법과 무관하게 This 를 고정 시키려면 "bind" 를 사용하면 된다.

여기서 꼭 기억 해야 하는 것은 "누가 호출을 했는지?" 이다.

## **예시 및 설명**

1.  **someone.whoAmI()**

- someone.whoAmI() 를 출력하면, 그 결과는 donghyeon이 출력된다.
- 그 이유는 someone이라는 함수가 "whoami"를 출력 했기 때문이다.

2.  **myWhoAmI**

- 이번에는 someone.whoAmI() 를 전역 변수인 myWhoAmI에 담아서 출력을 했다.
- 이 것을 브라우저에서 작동 시키면, window 객체가 출력이 되는데 그 이유는 글로벌은 윈도우에 의해 호출 되기 때문이다.

3.  **btn**

- btn의 이벤트로 호출을 하면? 역시 버튼에 의해 호출이 되기에 버튼에 관련된 정보가 호출된다.

```
var someone = {
  name: "donghyeon",
  whoAmI: function () {
    console.log(this);
  },
};

// 직접 호출하는 경우 by someone
someone.whoAmI();

// 변수에 저장하여, 호출 ( 글로벌 -> Window )
var myWhoAmI = someone.whoAmI;
myWhoAmI();

//호출은 버튼에 의해 이루어짐 => btn 출력.
var btn = document.getElementById("btn");
btn.addEventListener("click", someone.whoAmI); // btn
btn.addEventListener("click", whoAmI); // btn

// bind
var bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI();
```

## **함수 호출 방식**

### **1\. 일반 함수 호출**

기본적으로 this에는 전역 객체가 바인딩된다.

```
function foo() {

  console.log("foo's this : ", this); // window

  function bar() {

    console.log("bar's this: ", this); window

  }

  bar();

}

foo();
```

위의 예제처럼 전역 함수는 물론이고, 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩 된다.

다만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 변수이므로 객체를 생성하지 않는 일반 함수에서는 this의 의미는 없다.

콜백 함수가 일반 함수로 호출 된다면, 콜백 함수 내부의 this에도 전역 객체가 바인딩 된다.

```
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

const obj = {
  value: 100,

  foo() {
    console.log("foo's this: ", this); //  { value: 100, foo: [Function: foo] }
    console.log("foo's this.value: ", this.value); // 100

    // 메서드 내의 중첩 함수
    function bar() {
      console.log("bar's this : ", this); // window
      console.log("bar's this.value: ", this.value); // 1
    }

    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면
    // 전역 객체에 바인딩 된다.
    bar();
  },
};

obj.foo();
```

콜백 함수가 일반 함수로 호출된다면, 콜백 함수 내부의 this에도 전역 객체가 바인딩 된다. 어떠한 함수라도 일반 함수로 호출되면 this는 전역 객체에 바인딩 된다.

```
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

const obj = {
  value: 100,

  foo() {
    console.log("foo's this: ", this); //  { value: 100, foo: [Function: foo] }

    setTimeout(function () {
      console.log("callback's this : ", this);
      console.log("callback's this.value : ", this.value);
    }, 1000);
  },
};

obj.foo();
```

이를 변수에 할당 함으로써 객체에 저장된 값을 사용 할 수 있는데 이를 "명시적 바인딩" 이라 합니다.

```
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

const obj = {
  value: 100,

  foo() {
    const that = this;

    setTimeout(function () {
      console.log(that.value);
    }, 1000);
  },
};

obj.foo();
```

이러한 방법 외에도 \[ apply, call, bind \] 방법을 통해서도 가능합니다.

```
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

const obj = {
  value: 100,

  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(
      function () {
        console.log(this.value); // 100
      }.bind(this),
      1000
    );
  },
};

obj.foo();
```

화살표 함수는 this를 상위 객체에 바인딩 시킵니다.

```
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티다.
var value = 1;

const obj = {
  value: 100,

  foo() {
    // 화살표 함수 내부의 this는 상위 스코프의 this
    setTimeout(() => console.log(this.value), 100); // 100
  },
};

obj.foo();
```

### **2\. 메서드 호출**

메서드 내부의 this에는 메서드를 호출한 객체. 즉 메서드를 호출할 때 메서드 이름 앞에 기술한 객체에 바인딩이 됩니다.

```
const person ={

	name : "Kim",

    getName() {

      return this.name;

    }

};

console.log(person.getName()); // Kim
```

getName 메서드는 person 객체의 메서드로 정의가 되었습니다. 메서드는 프로퍼티에 바인딩이 된 함수를 뜻하는데요.

즉, person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라, 독립적으로 존재하는 별도의 객체 입니다.

그렇기 때문에 getNmae 프로퍼티가 가리키는 함수 객체, 즉 getName 메서드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메서드가 될 수도 있고, 일반 변수에 할당하여 일반 함수로 호출 될 수도 있다.

```
const anotherPerson = {
  name: "Lee",
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName();

// getName 메서드를 호출한 객체는 anotherPerson
console.log(anotherPerson.getName()); // Lee

// getName 메서드를 일반 함수에 할당하고, 호출
const getName = person.getName();
console.log(getName()); // ''
```

즉, 아래의 그림처럼 this는 프로퍼티로 메서드를 가리키고 있는 객체와는 관계가 없고, 호출되는 시점에 동적으로 바인딩 된다.

[##_Image|kage@bH7wDF/btq9NxPiH4B/n7YnaBG5WqdDuSdZPnreC0/img.jpg|alignCenter|data-origin-width="1280" data-origin-height="811" data-filename="KakaoTalk_Photo_2021-07-17-13-19-45.jpeg" data-ke-mobilestyle="widthOrigin"|||_##]

### **3\. 생성자 함수 호출**

생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩 된다.

```
function Circle(radius) {
  this.radius = radius;

  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```

### **4.  apply, call, bind 메서드에 의한 간접 호출**

apply, call, bind 메서드는 Function.prototype의 메서드이다. 즉, 이러한 메서드는 모든 함수가 상속받아 사용 할 수 있다.

```
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); // window

console.log(getThisBinding.apply(thisArg)); // 1
console.log(getThisBinding.call(thisArg)); // 1
```
