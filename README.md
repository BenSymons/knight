# knight
A chess board kata for the knight piece

## introduction

In the game of chess, a knight can capture pieces in an L shape. Either two spaces up/down and one left or right, or two spaces left/right and one up or down. Unlike other pieces, it's movement cannot be blocked so it doesn't matter what other pieces might be in the way. Below is a chess board represented by a nested array of strings. Any underscores `'_'` will represent an empty square and chess pieces will be represented by letters:

P = pawn
C = castle
K = knight
B = bishop
Q = queen

```js
  [
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "X", "_", "X", "_", "_", "_"],
    ["_", "X", "_", "_", "_", "X", "_", "_"],
    ["_", "_", "_", "K", "_", "_", "_", "_"],
    ["_", "X", "_", "_", "_", "X", "_", "_"],
    ["_", "_", "X", "_", "X", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```
^ The Xs on this chess board array shows where a knight can capture pieces

## Instructions

This kata is based on the knight piece. You will need to write the code for the function `knight`. Knight only accepts one argument which is a board. The board is a nested array of strings like the one shown above. The function should find the position of the knight `'K'` (there will always be one knight) and then work out which pieces it can capture i.e. which pieces fall into it's range as shown above, and then return those pieces in an array. The ordering of the array doesn't matter so long as the right pieces are in there. If there are no pieces that can be captured, knight should return an empty array.

## Examples

```js
  [
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "B", "_", "_", "_", "_", "_"],
    ["_", "_", "P", "P", "_", "_", "_", "_"],
    ["_", "_", "P", "K", "P", "_", "_", "_"],
    ["_", "Q", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```

In the board above, the knight `'K'` is in the middle of the board. There are two pieces that can be captured in the L shape pattern that a knight uses. The bishop `'B'` can be captured if the Knight travels two squares up and one to the left and the queen can be captured if the knight travels two squares left and one square down. So if the knight function is passed this board, it should return `['B', 'Q']` remember, the ordering of the array doesn't matter.

---

```js
  [
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["C", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "P", "_", "_", "_", "_"],
    ["_", "_", "_", "K", "P", "_", "_", "B"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```

In this board there are no pieces that the knight can capture because no pieces fall into the L shaped pattern as shown at the top of the readme. The knight function in this case should return an empty array.
