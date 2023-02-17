console.log('***** Music Collection *****')

// Create a variable collection that starts as an empty array.
let collection = [];

// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object

function addToCollection( title, artist, yearPublished ){ // created addToCollection function with parameters 
    let album = { title: title, artist: artist, yearPublished: yearPublished } // create object album with the properties as parameters
    collection.push(album) // add object album to collection array
    return album; // return object album
} // end addToCollection

console.log( addToCollection('Be', 'BTS', 2020) );

// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.


console.log( addToCollection('Proof', 'BTS', 2022) ); // added albums
console.log( addToCollection('Jack in the Box', 'J-Hope', 2022) );
console.log( addToCollection('Indigo', 'RM', 2022) );
console.log( addToCollection('Fearless', 'Taylor Swift', 2008) );
console.log( addToCollection('thank u, next', 'Ariana Grande', 2019) );
console.log( addToCollection('Justice', 'Justin Bieber', 2021) );
console.log('Collection:', collection); // testing collection array to see the album

