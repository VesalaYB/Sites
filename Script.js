let obj = {
  name: 'John',
  age: 23,
  lvl: 12,
};

for (let item of Object.entries(obj)) {
  console.log(item);
}

let dif = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * 2])
);

for (let [item1, item2] of Object.entries(dif)) {
  console.log(item1 + ' : ' + item2);
}

console.log(Object.keys(obj));

let res = Object.values(obj).reduce((sum, current) => sum + current, 0);

console.log(res);

let [fn, sn] = 'Hello there!'.split(' ');

console.log(fn + sn);

let obj2 = {
  names: 'John',
  age: 23,
  lvl: 12,
};

let { names: n = 'Jack', sec: s = 123, thi: t = 321 } = obj2;

console.log(n);
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
  title = 'KEKW',
} = options;

console.log(width);

let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(isAdmin);

let now = new Date(2016, 1, 28);

now.setDate(now.getDate() + 2);

console.log(now);
