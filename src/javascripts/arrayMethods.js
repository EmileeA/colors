import c from './helpers/data/color';

const colors = c.getColors(); // she called it "c" so she could const colors. This is a function that returns my color array. I need this array everywhere in every single function

const forEachFunc = () => {
// loops over all colors and does a console.log to print the color name
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }

  // below we are going to the same thing, but easier!
  // basic syntax is colors.forEach(); you put the function inside the (), what goes in the {} is the console log
  // whatever the singular thing that you want to call it () and what you want to do with it (after the =>)
  colors.forEach((color) => console.log('forEach', color.name));
};


// FILTER
const filterFunc = () => {
  // filter that prints out an array of colors that have a hexValue that starts wit an 'F' - first 3
  const newColors = [];
  // some stuff here
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      newColors.push(colors[j]);
    }
  }
  console.log('for', newColors);
  // a fancy new way of writing for loops below!
  // an array of whatever meets the criteria after =>
  // each thing that I get I call it x.
  const filterColors = colors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

// FIND
const findFunc = () => {
  // find the color that has a name of "green" and console out its hexValue
  let colorToFind = {};
  // do a for loop and some stuff (like an if)
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  }
  console.log('for', colorToFind.hexValue);
  // the array is colors the method is find
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

// MAP, here's a case where you would use it with react. You won't use it for a couple weeks.
// the map function always returns an array

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }

  console.log('for', h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

// REDUCE
// reduce takes a function and
const reduceFunc = () => {
  // total number of upVotes
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log('for', total);
  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};


const init = () => {
  // console.error('inside arrayMethods.js'); // console error is the same thing as console log
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
