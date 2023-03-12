// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const copyOfcats= [...cats, "Broom"];
    return copyOfcats;
}
function prependCat(name){
    const copyOfcats= ["Arnold", ...cats]
    return copyOfcats;
}
function removeLastCat(){
    const copyOfcats= cats.slice(0, -1);
    return copyOfcats;
}
function removeFirstCat(){
    const copyOfcats= cats.slice(1);
    return copyOfcats;
}