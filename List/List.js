class List {

store = { 0:1, 1:2, 2:3, 3:4 };

  add(index, value){
    this.store[index] = value;

    return this.store;
  }

  read(index){
    return this.store[index];
  }

  remove(index){
    delete this.store[index];
    return this.store;
  }
}

module.exports = { List };