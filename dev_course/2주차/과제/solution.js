function* range(start = 0, stop = start, step = 1) {
  if (arguments.length === 1) start = 0;
  if (arguments.length < 3 && start > stop) step *= -1;

  if (start < stop) {
    while (start < stop) {
      yield start;
      start += step;
    }
  } else {
    while (start > stop) {
      yield start;
      start += step;
    }
  }
}

function map(f) {
  return function* (iter) {
    for (const a of iter) yield f(a);
  };
}

function filter(f, iter) {
  return function* (iter) {
    for (const a of iter) if (f(a)) yield a;
  };
}

function take(limit) {
  return function* (iter) {
    for (const a of iter) {
      yield a;
      if (--limit === 0) break;
    }
  };
}

function reduce(f) {
  return function (acc, iter) {
    if (!iter) acc = (iter = acc[Symbol.iterator]()).next().value;
    for (const a of iter) acc = f(acc, a);
    return acc;
  };
}

function each(f) {
  return function (iter) {
    for (const a of iter) f(a);
    return iter;
  };
}

function go(arg, ...fs) {
  return reduce((arg, f) => f(arg))(arg, fs);
}

const head = ([a]) => a;

const find = (f) => (iter) => head(filter(f)(iter));

function inc(parent, k) {
  parent[k] ? parent[k]++ : (parent[k] = 1);
  return parent;
}

const countBy = (f) => (iter) =>
  reduce((counts, a) => inc(counts, f(a)))({}, iter);

const identity = (a) => a;

const count = countBy(identity);

const groupBy = (f) => (iter) =>
  reduce((group, a, k = f(a)) => ((group[k] = group[k] || []).push(a), group))(
    {},
    iter
  );

function* entries(obj) {
  for (const k in obj) yield [k, obj[k]];
}

function* values(obj) {
  for (const k in obj) yield obj[k];
}

const isFlatable = (a) =>
  a != null && !!a[Symbol.iterator] && typeof a !== "string";

function* flat(iter) {
  for (const a of iter) isFlatable(a) ? yield* a : yield a;
}

function zip(a) {
  return function* (b) {
    a = a[Symbol.iterator]();
    b = b[Symbol.iterator]();
    while (true) {
      const { value, done } = a.next();
      const { value: value2, done: done2 } = b.next();
      if (done && done2) break;
      yield [value, value2];
    }
  };
}

function concat(...args) {
  return flat(args);
}

