# Консольлный калькулятор

index.js - реализация на js  
index.ts - тоже самое переписал на ts


# Expression

1 + 1 - 2 * 4 => (- 2 * 4) + 1 + 1
5 + 1 / 6 => (1 / 6) + 5
2 * 4 - 4 / 2 - 6 / 3 => (- 4 / 2) + (- 6 / 3) + (2 * 4)

# Plan

* input string 1 + 2 * 4 - 4 / 2 - 6 / 3
* verification: [{value: 1, type: Number}, {value: '+', type: 'Operator'}, ... , {value: 3, type: 'Number'}  
* group:  [[1], [2 * 4], [- 4 / 2], [- 6 / 3]]
* calculation: [ 1, 8, -2, -2]

2 + 2 = > [2], [2]

# Calculatation

Array length
[2] -> 2

[-2] -> -2
[*2] -> add to previous element *
[/2] -> add to previous element *

[2*2] -> 4
[2/2] -> 1
[2*-] -> add to previous element *
[2*/] -> add to previous element *

[2*-2] -> -4
[2*/-2] -> -1

* - if (first or last element = operator) then add to previous element
