let address = "1.1.1.1";
address = address.split("");

for (let i = 0; i < address.length; i++) {
  if (address[i] === ".") {
    address[i] = "[.]";
  }
}

console.log(address.join(""));
