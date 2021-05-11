let address = "1.1.1.1";
address = address.split("");

for (let i = 0; i < address.length; i++) {
  if (address[i] === ".") {
    address[i] = "[.]";
  }
}

// split과 join을 통해 단순화
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
