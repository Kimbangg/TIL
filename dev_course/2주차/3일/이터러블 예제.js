var users = [
  {
    name: "a",
    age: 21,
    family: [
      { name: a1, age: 53 },
      { name: a2, age: 47 },
      { name: a3, age: 16 },
      { name: a4, age: 15 },
    ],
  },
  {
    name: "b",
    age: 22,
    family: [
      { name: b1, age: 53 },
      { name: b2, age: 47 },
      { name: b3, age: 16 },
      { name: b4, age: 15 },
    ],
  },
  {
    name: "c",
    age: 23,
    family: [
      { name: c1, age: 53 },
      { name: c2, age: 47 },
      { name: c3, age: 16 },
      { name: c4, age: 15 },
    ],
  },
  {
    name: "d",
    age: 24,
    family: [
      { name: d1, age: 53 },
      { name: d2, age: 47 },
      { name: d3, age: 16 },
      { name: d4, age: 15 },
    ],
  },
];

go(
  users,
  L.map((u) => u.family),
  L.flatten,
  L.filter((u) => u.age < 20),
  L.map((u) => u.name),
  take(4)
);
