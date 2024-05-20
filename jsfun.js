const ExampleOne = {
    hey: "now"
};

const Hey = () => {
    console.log("Example one: ")
    return ExampleOne;
};

console.log(Hey());

// part two 
const ExampleTwo = {
    hej: "bye"
};

const Hej = () => {
    console.log("Example two: ")
    console.log(ExampleTwo);
    
};


Hej();

///Trean
console.log("Example three: ");
const Tre = {
   
    hey: { wow: ["now", "then", "later"] }
    
};

const tre = () => {
    return Tre;
};

console.log(tre())

//trean.1
console.log("Example Three.One: ");
console.log(tre().hey);

//trean.2
console.log("Example Three.Two: ");
console.log(tre().hey.wow)

//trean.3
console.log("Example Three.Three: ");
console.log(tre().hey.wow[1])

//trean.4
console.log("Example Three.Four: ");
console.log(tre().hey.wow[0])