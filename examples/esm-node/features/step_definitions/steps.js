import assert from "assert";
import { When, Then } from "@cucumber/cucumber";
import { Auth } from "../../src/index.js";

// When("the greeter says hello", function () {
//   this.whatIHeard = new Greeter().sayHello();
// });

// Then(
//   "I should have heard {string}",
//   function (expectedResponse) {
//     assert.equal(this.whatIHeard, expectedResponse);
//   }
// );




When("the user logs in", function () {
  const feature = new Auth();
  this.result = feature.login();
});

Then("the screen displays {string}", function (expected) {
  assert.equal(this.result, expected);
});
