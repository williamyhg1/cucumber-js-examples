import assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { Emotion } from "../../src/index.js";

// When("the greeter says hello", function () {
//   this.whatIHeard = new Greeter().sayHello();
// });

// Then(
//   "I should have heard {string}",
//   function (expectedResponse) {
//     assert.equal(this.whatIHeard, expectedResponse);
//   }
// );




When("the user cries out", function () {
  const feelings = new Emotion();
  this.whatISaw = feelings.cry();
});

Then("the screen displays {string}", function (expected) {
  assert.equal(this.whatISaw, expected);
  console.log("what I Saw is "+JSON.stringify(expected)+ `and this.whatIsaw is ${this.whatISaw} `)
});
