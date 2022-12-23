// index.js

let cats = ["Milo", "Otis", "Garfield"];

// Array functions

const destructivelyAppendCat = (name) => {
  cats.push(name);
  return cats;
}

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
}

const destructivelyRemoveLastCat = () => {
  cats.pop();
  return cats;
}

const destructivelyRemoveFirstCat = () => {
  cats.shift();
  return cats;
}

const appendCat = (name) => {
  let newCats = [...cats];
  newCats.push(name);
  return newCats;
}

const prependCat = (name) => {
  let newCats = [...cats];
  newCats.unshift(name);
  return newCats;
}

const removeLastCat = () => {
  let newCats = [...cats];
  newCats.pop();
  return newCats;
}

const removeFirstCat = () => {
  let newCats = [...cats];
  newCats.shift();
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};


