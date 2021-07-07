function solution(orders, course) {
  const orderedCountMap = new Map();
  const maxCountMap = new Map();
  const courseSet = new Set(course);

  function combination(result, index, str) {
    if (courseSet.has(result.length)) {
      let count = orderedCountMap.get(result) || 0;
      orderedCountMap.set(result, ++count);

      const max = maxCountMap.get(result.length) || 0;
      if (max < count) {
        maxCountMap.set(result.length, count);
      }
    }

    for (let i = index; i < str.length; i++) {
      combination(result + str[i], i + 1, str);
    }
  }

  orders
    .map((order) => order.split("").sort().join(""))
    .forEach((e) => combination("", 0, e));

  return course
    .map((length) => {
      const max = maxCountMap.get(length);
      return Array.from(orderedCountMap)
        .filter((e) => e[0].length === length && e[1] >= 2 && e[1] === max)
        .map((e) => e[0]);
    })
    .flatMap((e) => e)
    .sort();
}
