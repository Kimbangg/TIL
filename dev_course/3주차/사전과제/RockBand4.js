function RockBand(members) {
  this.members = members;
  this.perform = function () {
    // setTimeout(function () {
    //   // function 내부를 가르키는 것.
    //   // 고로 this.members는 없음.
    //   this.members.forEach(function (member) {
    //     member.perform();
    //   });
    // }, 1000);

    // 해결방법1 [ arrow function ]
    // 하나 상위의 this를 불른다. => this
    setTimeout(() => {
      this.members.forEach(function (member) {
        member.perform();
      });
    }, 1000);

    // bind로 강제화한다.
    setTimeout(
      function () {
        this.members.forEach(function (member) {
          member.perform();
        });
      }.bind(this),
      1000
    );
  };
}

var thisOralCigarettes = new RockBand([
  {
    name: "takuya",
    perform: function () {
      console.log("Sing : a e u i a e u i");
    },
  },
]);
