const cats = ["Milo", "Otis", "Garfield"];




function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}// Write your solution here!
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.splice(-1);
    return cats;
}