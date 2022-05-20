import commentCounter from './commentCounter.js';

describe('Pokemon counter', () => {
  test('Count number of pokemon in display', () => {
    const testComments = [
      {}, {}, {}
    ];
    expect(commentCounter(testComments)).toBe(`comments(${testComments.length})`);
  });
});