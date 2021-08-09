const a = [1,2];
// a[Symbol.iterator] = null;
console.log([...a, ...[3,4]]);
console.log(a);