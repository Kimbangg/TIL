function asyncPromiseWork() {
  return new Promise((resolve, reject) => {
    return resolve("complete");
  });
}

// then에 넘겨진 함수를 resolve로 인식하고 수행
asyncPromiseWork().then((result) => console.log(result));

// promise & callback 비교

// 1. promise
asyncPromiseWork()
  .then((result) => {
    return promiseNextWork(reuslt);
  })
  .then((result) => {
    return promiseThirdWork(result);
  })
  .catch((e) => {
    alert("저런 에러가 발생했군요.");
  })
  .finally(() => {
    alert("무적권 끝나는 작업");
  });

// 2. 콜백
callbackWork((result) => {
  callbackNextWork((result) => {
    //..
  });
});

// Promise를 이용한 비동기 해결

const delay = (delayTime) =>
  new Promise((resolve) => {
    setTimeout(resolve, delayTime);
  });

delay(5000).then(() => {
  doSomething();
  return delay(3000).then(() => {
    console.log("completed");
  });
});

// async vs promise

const API_ENDPOINT = "https://kdt.bangg.codes";

request(`${API_ENDPOINT}/todos`, (todos) => {
  const completedTodo = todos.find((todo) => todo.isCompleted);

  if ( completedTodo ) {
    request(`${API_ENDPOINT}/comments?todo.id=${completedTodo/id}`, (comments) => {
      comments.forEach(comment => console.log((comment.contnent)))
    }
});


const API_ENDPOINT = "https://kdt.bangg.codes";

const todos = promiseRequest(`${API_ENDPOINT}/todos`)
    .then(todos => {
      const compltedTodo = todos.find(todo => todo.isCompleted)

      if (completedTodo) {
        return promiseRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
      }
    })
    .then(comments => {
      comments.forEach(comment => console.log(comment.contnent))
    })

    // promise 용법들
    
    // 1. promise.all

    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));
    const promise1 = delay(1000);
    const promise1 = delay(2000);
    const promise1 = delay(3000);

    Promise.all([promise1,promise2,promise3]).then(() => {
      console.log("work done!");
    })

    // 2. promise.race ( 하나만 끝나도 끝난다. )

    function getRandomInt(min ,max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min)) + min;
    }

    const promise = [1,2,3,4,5].map(n => {
      const delayTime = getRandomInt(1000, 5000);
      
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${n}번 고양이 승리`)
        }, delayTime)
      })
    })

    Promise.race(promises).then(mesaage => console.log(message))

    // 3. promise.any ( 하나가 정상 종료되면 끝난다. )

      function getRandomInt(min ,max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min)) + min;
    }

    const promise = [1,2,3,4,5].map(n => {
      const delayTime = getRandomInt(1000, 5000);
      
      return new Promise((resolve, reject) => {

        if ( n === 1 ) {
          return reject(`${n}번 고양이 기권`)
        }

        setTimeout(() => {
          resolve(`${n}번 고양이 승리`)
        }, delayTime)
      })
    })

    Promise.race(promises).then(mesaage => console.log(message))


 // 4. promise.allSetteld ( 모든 결과가 끝날 때까지 대기. )


    function getRandomInt(min ,max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min)) + min;
    }

    const promise = [1,2,3,4,5].map(n => {
      const delayTime = getRandomInt(1000, 5000);
      
      return new Promise((resolve, reject) => {

        if ( n % 2 === 0 ) {
          return reject(`${n}번 고양이 완주 실패 ㅜ_ㅜ`)
        }

        setTimeout(() => {
          resolve(`${n}번 고양이 승리`)
        }, delayTime)
      })
    })

    Promise.race(promises).then(mesaage => console.log(message))