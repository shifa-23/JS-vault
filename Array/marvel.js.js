const marvel = ["t", 's']
const dc = ["suprman", 'batman']
//here it will take= it as a data

// marvel.push(dc)
// console.log(marvel)
// // console.log(marvel[2]);
// console.log(marvel[2][1]);
console.log(marvel.concat(dc));
//sameas push

// const a= marvel.concat(dc)
// console.log(a);

const newhero = [...marvel, ...dc]

console.log(newhero);

const another = [1,2,3,[4,5],[6,7,[8,9]]]
const real_another_usable_array = another.flat(Infinity)
console.log(real_another_usable_array);

//when we want aray 
console.log(Array.isArray('shifa'))
//uses of from
console.log(Array.from('shifa'))
// to make an array using key pair
//interier special
console.log(Array.from({name:'shifa'}));
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3));
console.log(Array.from(score1,score2,score3));
console.log(Array.of("shifa"));


