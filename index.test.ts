import knight from '.';
import boards from './boards.json'

describe('knights tests', () => {
  test(`Given there are no pieces to capture
      returns false`, () => {
    expect(knight(boards[0])).toBe(false);
  });
});