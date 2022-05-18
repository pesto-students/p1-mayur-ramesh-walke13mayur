//importing main.js file
const mathOperations = require('./main');
// creating objects for test
const a1 = mathOperations.sum(43, 56); // if ouput is 99 test case should be pass
const b1 = mathOperations.diff(59, 26);// if ouput is 33 test case should be pass
const c1 = mathOperations.product(8, 65);// if ouput is 520 test case should be pass
const a2 = mathOperations.sum(68, -53);// if ouput is 15 test case should be pass
const b2 = mathOperations.diff(78, 126);// if ouput is -48 test case should be pass
const c2 = mathOperations.product(0, 78);// if ouput is 0 test case should be pass


//creating test cases
test('testing sum for a1 ', () => {
  expect(a1).toBe(99);
});

test('testing diff for b1 ', () => {
  expect(b1).toBe(33);
});

test('testing product for c1 ', () => {
  expect(c1).toBe(520);
});
test('testing sum  for a2', () => {
  expect(a2).toBe(15);
});

test('testing diff  for b2', () => {
  expect(b2).toBe(-48);
});

test('testing product for c2', () => {
  expect(c2).toBe(0);
});