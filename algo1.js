//Make a function that looks through an array of objects (first argument) and returns an array of
// all objects that have matching name and value pairs (second argument). Each name and value pair
// of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let searchKeys = Object.keys(source);

    return collection.filter(function (obj) {
        for (let i = 0; i < searchKeys.length; i++) {
            if (
               // !obj.hasOwnProperty(searchKeys[i]) ||
                obj[searchKeys[i]] !== source[searchKeys[i]]
            ) {
                return false
            }
        }
            return true;

        });
 };



// Only change code above this line

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"}));

whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"})// should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}], {"apple": 1})// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{"apple": 1, "bat": 2}, {"bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}], {"apple": 1, "bat": 2})// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}], {"apple": 1, "cookie": 2}) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{"apple": 1, "bat": 2}, {"apple": 1}, {"apple": 1, "bat": 2, "cookie": 2}, {"bat": 2}], {
    "apple": 1,
    "bat": 2
})// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) //should return []