import knight from '.';
import boards from './boards.json'

describe('knights tests', () => {
  test(`Given there are no other pieces on the board
        Then knight returns an empty array`, () => {
    expect(knight(boards[0])).toEqual([]);
  });
  test(`Given there are other pieces on the board
        And none of them can be captured
        Then knight returns an empty array`, () => {
    expect(knight(boards[1])).toEqual([]);
  });
  test(`Given there is one piece that can be captured
        Then knight returns an array of that piece`, () => {
    expect(knight(boards[2])).toEqual(['Q']);
  });
  test(`Given there are several pieces that can be captured
        And the knight is in the corner of the board
        Then knight returns an array of those pieces`, () => {
    const actual = knight(boards[3]);
    expect(actual).toContain('B');
    expect(actual).toContain('C');
    expect(actual).toHaveLength(2);
  });
  test(`Given there are several pieces that can be captured
        And the knight is near the edge of the board
        Then knight returns an array of those pieces`, () => {
    const actual = knight(boards[4]);
    expect(actual).toContain('B');
    expect(actual).toContain('P');
    expect(actual).toContain('C');
    expect(actual).toHaveLength(3);
  });
});