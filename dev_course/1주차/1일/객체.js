const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "김동현" };
console.log(obj3["name"]);

// 객체 데이터 추가
obj3["email"] = "ehehdgus11@naver.com";
obj3.phone = "010-5517-8496";
console.log(obj3);

// 객체 데이터 삭제
delete obj3.phone;
console.log(obj3);

// 객체 데이터의 유무를 확인
console.log("email" in obj3);

// 키와 데이터 확인
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

// for in
for (const key in obj3) {
  console.log(obj3[key]);
}
