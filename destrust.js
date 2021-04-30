// Object Destructuring 1
8, 1846

// Object Destructuring 2
{
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
}

// Object Destructuring 3
First name is Alejandro and their favorite color is purple
First name is Melissa and their favorite color is green
First name is undefined and their favorite color is green

// Array Destructuring 1
Maya, Marisa, Chi

    // Array Destructuring 2
    "Raindrops on roses"
"whiskers on kittens" ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3
[10, 30, 20]

// Object Destructuring
const object = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {
    a,
    b
} = object.numbers

// One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({
    first,
    second,
    third,
    rest
})