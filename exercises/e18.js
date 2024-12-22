/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import  { maxBy } from './e17.js';

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  const cb = (asteroid) => {
    let numCommonDiscoveryYear = 0;
    for(let ast of data.asteroids) if(ast.discoveryYear === asteroid.discoveryYear) numCommonDiscoveryYear++;
    return numCommonDiscoveryYear;
  }
  // console.log(cb);
  // return cb.discoveryYear;
  return maxBy(data.asteroids, cb).discoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
