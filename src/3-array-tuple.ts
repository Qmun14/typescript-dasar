/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export { }; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

// type inference
let list1 = [1, 2, 3, 4, 5];

// square bracket
let list_1: number[];
list_1 = [1, 2, 3, 4, 5];

// generic array
let lis_2: Array<number>;
lis_2 = [1, 23, 454, 0];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
// type inference
let list_a = ['a', 'b', 'c'];

//square bracket
let list_a1: string[];
list_a1 = ["asds", "asdsas", "sads"];

//generic array
let list_a2: Array<string>;
list_a2 = ["asds", "asdsas", "lagi"];


/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */
// type inference
let union = ["Hello", "World", 1, 3, 4];

// square bracket
let union1: (string | number)[];
union1 = ["Hello", "Dunia", 2, 3, 7];

// generic Array
let union3: Array<string | number | boolean>;
union3 = [true, "aku", 234, false, "Djisamsoe", 1, 0, 7];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */
let list_data: [string, number, number, number];
list_data = ['cordinat', 2, 4, 7];


/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */
// inline interface
let array_object1: { color: string, index: number }[];
array_object1 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
]

// generic array
let array_object2: Array<{ color: string, index: number }>;
array_object2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
]

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
// square bracket
let matrix1: number[][];
matrix1 = [
    [1, 2],
    [3, 4],
];

// generic array
let matrix2: Array<Array<number>>;
matrix2 = [
    [1, 2],
    [3, 4],
];
/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];

