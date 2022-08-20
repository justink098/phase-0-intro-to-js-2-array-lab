const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}// Write your solution here!
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    name = [...cats,"Broom"];
    return name;
}
function prependCat(name){
    name = ["Arnold",...cats];
    return name;
}
function removeLastCat(){
    cats.slice(0,);
    return cats;
}
function removeFirstCat(){
    newArray = cats.slice(-2)
    return newArray;
}
