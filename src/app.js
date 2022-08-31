/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronouns = ["The", "Our", "A"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let dots = [".com", ".us", ".net", ".io"];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjs.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < dots.length; l++) {
        console.log(pronouns[i] + adjs[j] + nouns[k] + dots[l]);
      }
    }
  }
}
/*
let pronounIndx = Math.floor(Math.random() * pronouns.length);
let adjsIndx = Math.floor(Math.random() * adjs.length);
let nounsIndx = Math.floor(Math.random() * nouns.length);
let dotsIndx = Math.floor(Math.random() * dots.length);

console.log(
  pronouns[pronounIndx] + adjs[adjsIndx] + nouns[nounsIndx] + dots[dotsIndx]
);
*/
