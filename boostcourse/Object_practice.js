// object
let obj = { name: "donghyeon", age: 20 };
let myFriend = {
  key: "value",
  addition: [{ name: "codesquad" }, { age: 2 }],
};

// 배열 호출
console.log(myFriend.key);
console.log(myFriend["key"]);
console.log(myFriend.addition[0].name);

// for in [ 배열이 아닌 오브젝트에서 사용 할 것]

for (value in myFriend) {
  console.log(value);
}

for (key in myFriend) {
  console.log(myFriend[key]);
}

// object.keys

Object.keys(myFriend).forEach(function (v) {
  console.log(myFriend[v]);
});

// 배열 추가
myFriend["address"] = "seoul";
// console.log(myFriend);
