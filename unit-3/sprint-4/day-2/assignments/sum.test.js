import secTomin from "./data.js";

test('adds 1 + 2 to equal 3', () => {
    expect(secTomin(70)).toMatch(/1 minute 10 seconds/);
  });