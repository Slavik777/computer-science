const { List } = require('./List')

const list = new List;

const add = list.add(0, 1);
console.log(add);

const read = list.read(0);
console.log(read);

const remove = list.remove(1);
console.log(remove);
