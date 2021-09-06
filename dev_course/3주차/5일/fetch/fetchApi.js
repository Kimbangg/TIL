// fetch("https://kdt.roto.codes/todos")
//   .then((res) => {
//     // fetch의 기본 응답 결과는 Response 객체입니다.
//     // 응답은 json 또는 text로 바꿔줘야한다.
//     return res.json();
//   })
//   .then((data) => console.log(data));

fetch("https://kdt.roto.codes/users")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(` Status : ${res.status} : 요청이 처리되지 못함`);
  })
  .then((result) => console.log(result))
  .catch((e) => (document.querySelector(".app").innerHTML = e));
