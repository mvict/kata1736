# 🍅 
## set up sonarcloud and snyk
## Atomic behaviours related to E2E first scenario
#### Identify a bomb
'X' -> true ✔️
' ' -> false ✔️
# 🍅 🍅 
#### Return the value of a square
[[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]] + [1,1] > X ✔️
[[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]] + [1,1] -> ' ' ✔️

## Show the board. The player sees the board in a legible way
### Print an empty board ✔️
[["", "", "", ""]] + [] -> 
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+

### Print a board after a movement ✔️
[[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]] = >
`+-+-+-+
| | | |
+-+-+-+
| |X| |
+-+-+-+
| | | |
+-+-+-+`;


# 🍅 🍅 🍅 
## A player makes a move
### It's a bomb
[[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]] + [1, 1] -> true ✔️
[[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]] + [0, 0] -> false ✔️

## E2E A player steps in a bomb
[[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]] + [1, 1]  -> "Game over!. You lose"
