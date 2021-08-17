var idiots = {
  name: "idits",
  genre: "punk rock",
  members: {
    roto: {
      // roto 라는 스코프에서는 Undefined가 출력.
      membersName: "roto",
      play: function () {
        // 해결방법은 iditos을 직접 가르키게 하는법
        console.log(`band ${idiots.name} ${this.membersName} play start`);
      },
    },
  },
};

var thisTest = {
  whoAmI: function () {
    console.log(this);
  },

  testInTest: {
    whoAmI: function () {
      console.log(this);
    },
  },
};

// this는 thisTest 자체를 가리킨다.
thisTest.whoAmI();
thisTest.testInTest.whoAmI();
